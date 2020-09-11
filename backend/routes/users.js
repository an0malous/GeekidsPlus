const express = require('express');
const router = express.Router();
const User = require('../database/models/user');
const authenticated = require('../middleware/auth');

//Get users list
router.get("/", authenticated, (req, res)=> {

    User.find()
    .then((users)=> res.json(users))
    .catch(err=> res.status(400).json(`Error: ${err}`))
})

module.exports = router;