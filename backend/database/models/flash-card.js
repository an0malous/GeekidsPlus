const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flashCardSchema = new Schema({
    name: String,
    type: String,
    letter: String,
    img: String,
    audio: String,
    decks: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Deck"
        },
        name: String,
    }],
    author: {
        id: {type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        },
    username: String
    }
}, {
    timestamps: true,
});

const FlashCard = mongoose.model('FlashCard', flashCardSchema);

module.exports = FlashCard;