const authenticated = require('../middleware/auth')
const express = require('express')
const router = express.Router()
const Deck = require('../database/models/deck')

//Add a Deck
router.post("/add", (req, res)=>{
    const { name, type, flashCards} = req.body;

    let newDeck = new Deck({
        name,
        type,
        flashCards: [],
        author: {
            id: req.user._id,
            username: req.user.username
        }
    });
    newDeck.save()
    newDeck.flasCards.push(flashCards)
    newDeck.save()
    .then((newCard)=>res.json('New Deck added:' + newCard))
    .catch((err)=>res.json(`Sorry, ${err}`))
})

//Get cards list
router.get("/", authenticated, (req, res)=> {
Deck.find()
.then((deck)=> res.json(deck))
.catch(err=> res.status(400).json(`Error: ${err}`))
})


module.exports = router;