const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// require router modules
const bookRouter = require('./routes/book.router.js');
const movieRouter = require('./routes/movie.router.js');

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use the routes
// any request for /book, look in this module
app.use('/book', bookRouter);
app.use('/movie', movieRouter);

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})
