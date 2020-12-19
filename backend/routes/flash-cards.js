const authenticated = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const FlashCard = require('../database/models/flash-card');

//Add a card
router.post('/add', authenticated, (req, res) => {
	const { name, type, letter, img, audio } = req.body;

	const newCard = new FlashCard({
		name,
		type,
		letter,
		img,
		audio,
		decks: null,
		author: {
			id: req.user._id,
			username: req.user.username,
		},
	});
	newCard
		.save()
		.then(() => res.json('New Phonics Card added:' + newCard))
		.catch((err) => res.json(`Sorry, ${err}`));
});

// Edit a card
router.get('/edit/:id', (req, res) => {
	FlashCard.findById(req.params.id).then((card) => res.json(card));
});

//Update a card
router.post('/edit/:id', authenticated, (req, res) => {
	FlashCard.findByIdAndUpdate(req.params.id).then((card) => {
		const { name, type, letter, img, audio } = req.body;
		card.name = name;
		card.type = type;
		card.letter = letter;
		card.img = img;
		card.audio = audio;

		card.save()
			.then(() => res.json('Card updated:' + card))
			.catch((err) => req.json(`Sorry, ${err}`));
	});
});

//Get cards list
router.get('/', (req, res) => {
	FlashCard.find()
		.then((cards) => res.json(cards))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

//Delete a card
router.delete('/:id', (req, res) => {
	FlashCard.findByIdAndDelete(req.params.id)
		.then((card) => res.json(card))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
