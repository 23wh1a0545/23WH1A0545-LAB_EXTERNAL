const express = require('express');
const Note = require('../models/Note');

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const sortOrder = req.query.sort === "desc" ? -1 : 1;

    const notes = await Note.find().sort({ createdAt: sortOrder });

    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;