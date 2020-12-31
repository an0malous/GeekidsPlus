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

router.post("/add", authenticated, (req, res) =>{
    const { username, password, role } = req.body;
    const newUser = new User({
        username,
        password,
        role
    });
    newUser.save()
    .then((res)=>res.json('New User added:' + newUser))
    .catch(err=>res.json(`Sorry, ${err}`))  
})

router.get("/edit/:id", (req, res)=>{
    User.findById(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>req.json(`Sorry, ${err}`))
})

router.post("/edit/:id", (req, res)=>{
    User.findByIdAndUpdate(req.params.id)
    .then((user)=>{
        const { username, password, role } = req.body;
      user.username = username;
      user.password = password;
      user.role = role;
        user.save()
        .then(()=>res.json('User updated:' + user))
        .catch(err=>res.json(`Sorry, ${err}`))
    })
})

//Delete a user
router.delete("/:id", authenticated, (req, res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json(`Error: ${err}`))
})

module.exports = router;

