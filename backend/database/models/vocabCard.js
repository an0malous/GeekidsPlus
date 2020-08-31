const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vocabCardSchema = new Schema({
    name: String,
    theme: String,
    img: String,
    audio: String,
}, {
    timestamps: true,
});

const vocabCard = mongoose.model('VocabCard', vocabCardSchema);

module.exports = VocabCard;