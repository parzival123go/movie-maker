const mongoose = require('mongoose');

const mongoSchema = new mongoose.Schema({
    name: String,
    year: String,
    genre: String
});

module.exports = new mongoose.model('Movie', mongoSchema);