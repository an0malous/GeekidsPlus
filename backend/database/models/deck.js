const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deckSchema = new Schema({
    name: String,
    type: String,
    flashcards: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Flashcard"
        },
        name: String
    }],
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
},
    {
    timestamps: true,
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;