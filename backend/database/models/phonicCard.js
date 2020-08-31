const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phonicCardSchema = new Schema({
    name: String,
    type: String,
    letter: String,
    img: String,
    audio: String,
}, {
    timestamps: true,
});

const PhonicCard = mongoose.model('PhonicCard', phonicCardSchema);

module.exports = PhonicCard;