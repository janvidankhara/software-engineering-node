// load the express library
const express = require('express');
// create an instance of the library
const app = express();
// use express library to listen for URL pattern "/hello"
// respond with string "Hello World!"
app.get('/hello', (req, res) =>
  res.send('Hello World!'));
// listen to port 4000
const PORT = 4000;
app.listen(PORT);