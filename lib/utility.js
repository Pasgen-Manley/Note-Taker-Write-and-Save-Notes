const path = require('path');
const fs = require('fs');

// Makes note, pushes into an array then adds it to the database file
const makeNote = (note, noteArr) => {
  noteArr.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: noteArr }, NULL, 2)
  );
};

// Function that search specific note by ID
const searchId = (id, noteArr) => {
  const result = noteArr.filter(note => note.id === id)[0];
  return result;
};

// Function that allows users to edit notes
const editNote = (editedNote, noteArr) => {
  const index = noteArr.findIndex(note => note.id === editedNote.id);

  noteArr.splice(index, 1);
  noteArr.splice(index, 0, editedNote);

  fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: noteArr }, null, 2)
  )
};

// Function to delete notes
const deleteNote = (note, noteArr) => {
  const index = noteArr.indexOf(note);
  noteArr.splice(index, 1);

  fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: noteArr }, null, 2)
  );
};

module.exports = { makeNote, searchId, editNote, deleteNote };