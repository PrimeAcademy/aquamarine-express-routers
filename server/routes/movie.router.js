const express = require('express');
let router = express.Router();
const movieList = [];

router.get('/', (req, res) => {
  res.send(movieList);
});

router.post('/', (req, res) => {
  console.log('in movie post');

  movieList.push(req.body);
  res.sendStatus(201);
});

// export so other files can use this stuff
module.exports = router;
