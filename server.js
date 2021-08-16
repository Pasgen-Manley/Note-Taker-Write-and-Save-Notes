const express = require('express');
const route = require('./routes/index.js');
const PORT = process.env.PORT || 3001;

const app = express();
const path = require('path');


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('./api', route);
app.use(express.static('public'));


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);