const express = require('express');
const Note = require('../models/Note');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const sortOrder = req.query.sort === 'asc' ? 1 : -1;
    const notes = (await Note.find()).sort({ createdAt: sortOrder });
    return res.status(200).json(notes);
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
