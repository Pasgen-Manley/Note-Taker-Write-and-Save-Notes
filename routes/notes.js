const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../db/db.json');
const fs = require('fs');

const { makeNote, searchId, editNote, deleteNote } = require('../lib/utility');