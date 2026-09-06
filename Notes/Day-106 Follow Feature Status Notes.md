FOLLOW FEATURE — COMPLETE NOTES
1. Basic Concept

Example:

Pooja wants to follow Rahul.

There are two separate actions, so normally there are two APIs.

Pooja sends request
        ↓
   API 1: CREATE
        ↓
status = pending
        ↓
     Database
        ↓
Rahul receives request
        ↓
   API 2: UPDATE
        ↓
Accept → accepted
Reject → rejected
2. Architecture — Backend 3 Layers
                 CLIENT / FRONTEND
                        ↓
                     REQUEST
                        ↓
        ┌──────────────────────────┐
        │ 1. ROUTE / EXPRESS LAYER │
        │                          │
        │ Receives request         │
        │ Finds correct endpoint   │
        └────────────┬─────────────┘
                     ↓
        ┌──────────────────────────┐
        │ 2. CONTROLLER / SERVICE  │
        │                          │
        │ Business Logic           │
        │ Validation & Checks      │
        └────────────┬─────────────┘
                     ↓
        ┌──────────────────────────┐
        │ 3. MODEL / DATABASE      │
        │                          │
        │ Schema + DB + Index      │
        └──────────────────────────┘
Layer 1 — Route / Express

Job: Receive the request and send it to the correct controller.

router.post("/follow/:userId", sendFollowRequest);

router.patch(
  "/follow/:followId/status",
  updateFollowStatus
);
Layer 2 — Controller / Service

Job: Business logic + checks.

Examples:

Is user logged in?
Does target user exist?
Is it self-follow?
Is request already present?
Is followId valid?
Is current user allowed?
Is status valid?
Layer 3 — Model / Database

Job: Define and enforce data rules and store data.

Schema
 ↓
type
required
default
enum
 ↓
Index
 ↓
MongoDB
3. Follow Model — follow.model.js
const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    following: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    status: {
      type: String,
      default: "pending",
      enum: ["pending", "accepted", "rejected"]
    }
  },
  {
    timestamps: true
  }
);

followSchema.index(
  { follower: 1, following: 1 },
  { unique: true }
);

module.exports = mongoose.model("Follow", followSchema);
Meaning
follower  → Person who sends request
following → Person who receives request
status    → Current state of request

Example:

follower  → Pooja
following → Rahul
status    → pending
4. default — Important

If Pooja sends:

const follow = await Follow.create({
  follower: poojaId,
  following: rahulId
});

No status is given.

Because of:

default: "pending"

MongoDB gets:

{
  follower: poojaId,
  following: rahulId,
  status: "pending"
}
Remember

Default value is automatically applied when creating a new document if the field is not provided.

5. enum — Validation
enum: ["pending", "accepted", "rejected"]

Only these values are allowed:

pending   ✅
accepted  ✅
rejected  ✅

hello     ❌
approved  ❌
cancelled ❌
Important

enum tells us which values are allowed.

It does not decide the order of status changes.

Therefore, if your application allows it:

pending → accepted
pending → rejected

accepted → rejected
rejected → accepted

can all be possible.

6. Unique Index
followSchema.index(
  { follower: 1, following: 1 },
  { unique: true }
);

This prevents duplicate follower-following pairs.

Pooja → Rahul  ✅
Pooja → Rahul  ❌ duplicate

But these are different:

Pooja → Rahul  ✅
Pooja → Anjali  ✅
Rahul → Pooja  ✅
7. API 1 — Send Follow Request
Pooja → Rahul
Pooja clicks Follow
        ↓
POST /api/follow/:userId
        ↓
Authentication
        ↓
Controller
        ↓
Check Rahul exists
        ↓
Check Pooja ≠ Rahul
        ↓
Check duplicate
        ↓
Create Follow
        ↓
status = pending
        ↓
Database
Route
router.post(
  "/follow/:userId",
  sendFollowRequest
);
Controller
const sendFollowRequest = async (req, res) => {
  try {
    const follower = req.user._id;
    const following = req.params.userId;

    // Check target user
    const user = await User.findById(following);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Prevent self-follow
    if (follower.toString() === following.toString()) {
      return res.status(400).json({
        message: "You cannot follow yourself"
      });
    }

    // Check duplicate
    const existingFollow = await Follow.findOne({
      follower,
      following
    });

    if (existingFollow) {
      return res.status(400).json({
        message: "Follow request already exists"
      });
    }

    // Create request
    const follow = await Follow.create({
      follower,
      following
    });

    res.status(201).json({
      message: "Follow request sent",
      follow
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};
Result
{
  follower: Pooja,
  following: Rahul,
  status: "pending"
}
8. Rahul Receives the Request

Database:

┌──────────────────────────┐
│ Follow                   │
├──────────────────────────┤
│ follower  → Pooja        │
│ following → Rahul        │
│ status    → pending      │
└──────────────────────────┘

Rahul can now:

       pending
       /     \
      ↓       ↓
  accepted  rejected
9. API 2 — Accept / Reject

Rahul is responding to the existing Follow request.

Route
router.patch(
  "/follow/:followId/status",
  updateFollowStatus
);
Controller
const updateFollowStatus = async (req, res) => {
  try {
    const { followId } = req.params;
    const { status } = req.body;

    // 1. Validate status
    if (!["accepted", "rejected"].includes(status)) {
      return res.status(400).json({
        message: "Status must be accepted or rejected"
      });
    }

    // 2. Find follow request
    const follow = await Follow.findById(followId);

    if (!follow) {
      return res.status(404).json({
        message: "Follow request not found"
      });
    }

    // 3. Authorization
    // Only receiver can accept/reject
    if (
      follow.following.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "You cannot update this request"
      });
    }

    // 4. Update status
    follow.status = status;

    await follow.save();

    res.status(200).json({
      message: `Follow request ${status}`,
      follow
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};
10. What Is followId?

This was one of your important doubts.

followId is NOT Pooja's user ID.

It is the _id of the Follow document.

Example:

{
  _id: "F123",
  follower: "P001",
  following: "R001",
  status: "pending"
}

Here:

P001 → Pooja's userId
R001 → Rahul's userId
F123 → followId

Therefore:

PATCH /follow/F123/status

means:

Update this particular Follow request.

11. Authentication vs Authorization

These are different.

Authentication

Who are you?

Is Rahul logged in?
       ↓
      YES ✅
Authorization

Are you allowed to do this?

Follow:
Pooja → Rahul

Rahul tries to accept
       ↓
Rahul is receiver ✅
       ↓
Allowed

If Pooja tries to accept her own request:

Pooja is not receiver
       ↓
❌ Forbidden
12. Validation / Check Points
API 1 — Send Request
✓ Authentication
✓ Target user exists
✓ Cannot follow yourself
✓ Duplicate follow check
✓ Schema validation
✓ Unique index
API 2 — Accept / Reject
✓ Authentication
✓ Authorization
✓ followId/request exists
✓ Status is valid
✓ Receiver is making the decision
✓ Schema validation
13. Complete Architecture Flow
                    POOJA
                      ↓
                Click Follow
                      ↓
             API 1: POST /follow
                      ↓
              ┌──────────────┐
              │ ROUTE/EXPRESS│
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │ CONTROLLER   │
              │ / SERVICE    │
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │ MODEL/SCHEMA │
              └──────┬───────┘
                     ↓
                  DATABASE
                     ↓
              status: pending
                     ↓
                   RAHUL
                     ↓
              Accept / Reject
                     ↓
             API 2: PATCH /status
                     ↓
              ┌──────────────┐
              │ ROUTE/EXPRESS│
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │ CONTROLLER   │
              │ / SERVICE    │
              └──────┬───────┘
                     ↓
          Authentication + Authorization
                     ↓
              Validate followId
                     ↓
              Find Follow request
                     ↓
              Validate status
                     ↓
              MODEL / DATABASE
                     ↓
           accepted / rejected
14. Most Important Doubts — Final Answers
Your doubt	Answer
If status isn't sent during creation?	default: "pending" is applied
Does enum control status order?	No, only allowed values
Can rejected become accepted?	Yes, if your app allows it
Can accepted become rejected?	Yes, if your app allows it
Are there two APIs?	Yes, typically
API 1?	Create follow request
API 2?	Update follow status
Who calls API 2?	The receiver, Rahul
What is followId?	ID of the Follow document
Is followId Pooja's ID?	No
What does userId identify?	A User
What does followId identify?	A Follow request/document
Where is business logic?	Controller/Service
Where are schema rules?	Model/Schema
Where is data stored?	Database
What does index do?	Prevents duplicate follower + following pairs
Authentication?	Identifies the logged-in user
Authorization?	Checks whether that user is allowed to perform the action
🧠 One-page memory formula
USER
 ↓
API 1
 ↓
CREATE FOLLOW
 ↓
pending
 ↓
DATABASE
 ↓
RECEIVER
 ↓
API 2
 ↓
AUTHENTICATION
 ↓
AUTHORIZATION
 ↓
VALIDATION
 ↓
UPDATE STATUS
 ↓
accepted / rejected

Backend 3 layers:

ROUTE/EXPRESS
      ↓
CONTROLLER/SERVICE
      ↓
MODEL/SCHEMA + DATABASE

Two IDs to never confuse:

userId   → identifies the user
followId → identifies the Follow document