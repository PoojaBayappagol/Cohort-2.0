const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        length: [10, "Description must be at least 10 characters long"],
    },
  },
);

const noteModel = mongoose.model("Notes", notesSchema);

module.exports = noteModel;