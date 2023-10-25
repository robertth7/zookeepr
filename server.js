const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// const fs = require('fs');
// const path = require('path');
// const { animals } = require('./data/animals.json');

// const PORT = process.env.NODE_ENV || 3001;
// setting up the server only takes two steps: we need to instantiate the server, then tell it to listen for requests. 
// To instantiate the server, we added the const app = express();

// parse incoming string of array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());


// adding middleware CSS & JavaScript below
// This middleware will help create a virtual path between the location of the file based on the directory given and the route itself.
app.use(express.static('public'));
// so whenever serving static pages with Express, the static middleware needs
// to be used for the pages to lead their corresponding resources properly.

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
