const express = require("express");

const router = express.Router();

const {createNoteController,getAllNotesController,getNoteByIdController,updateNoteByIdController,patchNoteByIdController,deleteNoteByIdController}= require("../controllers/notes.controller.js");

router.post("/create", createNoteController);
router.get("/all", getAllNotesController);
router.get("/:id", getNoteByIdController);
router.put("/:id", updateNoteByIdController);
router.patch("/:id", patchNoteByIdController);
router.delete("/:id", deleteNoteByIdController);

module.exports = router;