

========================================================
SECTION A — BEGINNER 
========================================================

Q1. Welcome Email 
--------------------------------------------------------
Create a function registerUser.

Requirements:
- registerUser takes two arguments:
    1. username
    2. callback
- After 2 seconds, the user should be successfully registered.
- Call the callback with an object:
    { id: 101, username: "Pooja" }
- Inside the callback, print:
    User Registered
    User ID: <id>
    Username: <username>

Goal: Passing an object to a callback, receiving data,
      understanding the basic flow of setTimeout().


Q2. Mobile Recharge 
--------------------------------------------------------
Create a function rechargeMobile.

Requirements:
- Takes three arguments: mobileNumber, amount, callback
- After 2 seconds, recharge should be complete.
- Call the callback with an object containing:
    status, number, amount, transactionId

Final Output:
    Recharge Successful
    Transaction ID: <transactionId>
    Amount: <amount>

Goal: Taking multiple arguments, passing an object to a
      callback, handling the response.


Q3. Download Image 
--------------------------------------------------------
Create a function downloadImage.

Requirements:
- Takes two arguments: imageName, callback
- After 3 seconds, call the callback with an object:
    name, size, format

Final Output:
    Downloading...
    Download Complete
    Image Name: <name>
    Size: <size>
    Format: <format>

Goal: Simulating delay, passing an object via callback.


========================================================
SECTION B — INTERMEDIATE 
========================================================

Q4. Movie Booking
--------------------------------------------------------
Scenario:
A user wants to watch a movie. First the movie is searched.
Once found, seat availability is checked. Once seats are
available, the ticket is booked.

Functions to implement:
- searchMovie(movieName, callback)
    → returns { movieId, movieName }
- checkSeats(movieId, callback)
    → returns { availableSeats }
- bookTicket(movieId, callback)
    → returns { bookingId, status }

Flow:
    Search Movie
        ↓
    Check Seats
        ↓
    Book Ticket

Goal: Callback chaining — using the previous callback's
      data inside the next function call.


Q5. Food Delivery 
--------------------------------------------------------
Scenario:
A customer places a food order. The restaurant accepts the
order. Food is prepared. A delivery boy is assigned.

Functions to implement:
- placeOrder()
- prepareFood()
- assignDelivery()

Note: Each function should call its callback after a
1 second delay.

Final Output:
    Order Accepted
        ↓
    Preparing Food
        ↓
    Delivery Boy Assigned
        ↓
    Food Delivered

Goal: Chaining multiple callbacks together.


Q6. Online Course 
--------------------------------------------------------
Scenario:
A student logs in. Their course is fetched. Videos are
then loaded.

Functions to implement:
- loginStudent()
- getCourse()
- loadVideos()

Flow:
    Login
        ↓
    Course Loaded
        ↓
    Videos Loaded

Note: Each callback should use the result of the previous
      step.

Goal: Callback dependency and nested callbacks.


========================================================
SECTION C — ADVANCED 
========================================================

Q7. Online Shopping 
--------------------------------------------------------
Scenario:
A user shops on a website.

Flow:
    Search Product
        ↓
    Add to Cart
        ↓
    Apply Coupon
        ↓
    Make Payment
        ↓
    Generate Invoice

Functions to implement:
- searchProduct()
- addToCart()
- applyCoupon()
- makePayment()
- generateInvoice()

Note: Each function should call the next function through
      its callback.

Goal: Experience 5-level callback nesting (callback hell).


Q8. Hospital Appointment 
--------------------------------------------------------
Scenario:
A patient visits the hospital. Registration happens. A
doctor is assigned. An appointment is booked. A
prescription is generated. Finally, a bill is generated.

Functions to implement:
- registerPatient()
- assignDoctor()
- bookAppointment()
- generatePrescription()
- generateBill()

Note: Print each step to the console as it completes.

Goal: Managing a long callback chain.


Q9. Banking System 
--------------------------------------------------------
Scenario:
A customer logs in. Account details are fetched. Balance
is checked. Money is transferred. Transaction history is
updated. An SMS notification is sent.

Functions to implement:
- login()
- fetchAccount()
- checkBalance()
- transferMoney()
- updateHistory()
- sendSMS()

Flow:
    Login
        ↓
    Account Loaded
        ↓
    Balance Checked
        ↓
    Transfer Successful
        ↓
    History Updated
        ↓
    SMS Sent

Goal: Managing a 6-level real-world callback chain.

