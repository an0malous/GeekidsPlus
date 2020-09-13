const authenticated = require('../middleware/auth')
const express = require('express')
const router = express.Router()
const phonicCard = require('../database/models/phonicCard')

//Add a card
router.post("/add", (req, res)=>{
    const { name, type, letter, img, audio } = req.body;

    const newCard = new phonicCard({
        name,
        type,
        letter,
        img,
        audio
    });
    newCard.save()
    .then(()=>res.json('New Phonics Card added:' + newCard))
    .catch((err)=>req.json(`Sorry, ${err}`))
})

// Edit a card
router.get("/edit/:id", (req, res)=>{
    phonicCard.findById(req.params.id)
    .then((card)=>res.json(card))
})

//Update a card
router.post("/edit/:id", (req, res)=>{
phonicCard.findByIdAndUpdate(req.params.id)
.then((card)=>{
    const { name, type, letter, img, audio } = req.body
    card.name = name;
    card.type = type;
    card.letter = letter;
    card.img = img;
    card.audio = audio;

    card.save()
    .then(()=>res.json('Card updated:' + phonicCard))
    .catch((err)=>req.json(`Sorry, ${err}`))
})
})

//Get cards list
router.get("/", authenticated, (req, res)=> {
phonicCard.find()
.then((cards)=> res.json(cards))
.catch(err=> res.status(400).json(`Error: ${err}`))
})

//Delete a card
router.delete("/:id", (req, res)=> {
    phonicCard.findByIdAndDelete(req.params.id)
    .then((card)=>res.json(card))
    .catch(err=> res.status(400).json(`Error: ${err}`))
})

module.exports = router;