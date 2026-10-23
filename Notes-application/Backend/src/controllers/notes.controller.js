const noteModel = require("../models/note.model");


// Create a new note
const createNoteController = async (req, res) => {
  try {
    const { title, description } = req.body;    
    const newNote =await noteModel.create({
         title,
        description
    });
    
    res.status(201).json({
        message: "Note created successfully",
        note: newNote
    });
  }

    catch (error) {  
        res.status(500).json({
            message: "Error creating note",
            error: error.message
        });
    }
    
};

//get all notes
const getAllNotesController = async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).json({
            message: "Notes retrieved successfully",
            notes: notes
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error retrieving notes",
            error: error.message
        });
    }

};

//get one note by id
const getNoteByIdController = async (req, res) => {
    try {
        const noteId = req.params.id;
        const note = await noteModel.findById(noteId);
        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }
        res.status(200).json({
            message: "Note retrieved successfully",
            note: note
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error retrieving note",
            error: error.message
        });
    }

};

//update note by id
const updateNoteByIdController = async (req, res) => {
    try {
        const noteId = req.params.id;
        const { title, description } = req.body;
        const updatedNote = await noteModel.findByIdAndUpdate(noteId, {
            title,
            description
        }, { new: true });

        if (!updatedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note updated successfully",
            note: updatedNote
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error updating note",
            error: error.message
        });
    }

};

//update note by id using patch
const patchNoteByIdController = async (req, res) => {
    try {
        const noteId = req.params.id;
        const updatedFields = req.body;
        const updatedNote = await noteModel.findByIdAndUpdate(noteId, updatedFields, { new: true });

        if (!updatedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }
        res.status(200).json({
            message: "Note updated successfully",
            note: updatedNote
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error updating note",
            error: error.message
        });
    }
};

//delete note by id
const deleteNoteByIdController = async (req, res) => {
    try {
        const noteId = req.params.id;
        const deletedNote = await noteModel.findByIdAndDelete(noteId);
        if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }
        res.status(200).json({
            message: "Note deleted successfully",
            note: deletedNote
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting note",
            error: error.message
        });
    }
};


module.exports = {
  createNoteController,
  getAllNotesController,
  getNoteByIdController,
  updateNoteByIdController,
  patchNoteByIdController,
  deleteNoteByIdController
};
