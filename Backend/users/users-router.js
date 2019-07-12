const router = require('express').Router();

const Users = require('./users-model.js');


// Get all users
router.get('/', (req, res) => {
    Users.find()
      .then(users => {
          res.json(users);
      })
      .catch(err => res.send(err));
});




module.exports = router;