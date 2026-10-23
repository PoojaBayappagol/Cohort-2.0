const express = require("express");
const connectDB = require("./config/database.js");
const notesRoutes = require("./routes/notes.route.js");

// Connect to MongoDB
connectDB();

const app = express();

app.use(express.json());

app.use("/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = app;