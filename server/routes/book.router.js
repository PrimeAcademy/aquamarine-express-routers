const express = require('express');
let router = express.Router();
const bookList = [];

router.get('/', (req, res) => {
  res.send(bookList);
});

router.post('/', (req, res) => {    
  console.log('in book post');

  bookList.push(req.body);
  res.sendStatus(201);
});

// export so other files can use this stuff
module.exports = router;
