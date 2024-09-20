const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    unique: false,
  },
  photo_url: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports = mongoose.model('Animal', animalSchema);
