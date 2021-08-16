const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const notesdb = require('../db/db.json');
const fs = require('fs');

const { makeNote, searchId, editNote, deleteNote } = require('../lib/utility');

router.get('/notes', (req, res) => {
  res.json(notesdb);
});

router.post('/notes', (req, res) => {
  if (!req.body.id) {
    req.body.id = uuidv4();
    makeNote(req.body, notesdb);
  } else {
    editNote(req.body, notesdb);
  } 

  res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
  const note = searchId(req.params.id, notesdb);

  deleteNote(note, notesdb);
  res.json();
});

module.exports = notes;
