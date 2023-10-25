const router = require('express').Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');

// create route for getting data from server.
// bc we are not able to use app any longer, we will change 'app.get' to 'router.get'
router.get('/animals', (req, res) => {
    let results = animals;
    // console.log(req.query)
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// create route for getting data from server.
// 'req' object gives us acces to another property for this case, 'req.params'
// Unlike the query object, the param object needs to be defined int he route path, with <route>/:<parameterName>
router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/animals', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
        // add animal to json file and animals array in this function
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }
    // req.body is where our incoming content will be
    // console.log(req.body);
    // res.json(req.body);
});

module.exports = router;