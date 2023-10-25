const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');


router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;

// we're using this file as a central hub for all routing functions we may want to add to the application. 
// we've added this code so that later, when we add additional routes, they can all be exported from the same file. 

// this is adding middleware so that our app knows about the routes in 'animalRoutes.js'.