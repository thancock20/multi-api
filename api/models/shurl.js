const mongoose = require('mongoose');

const { Schema } = mongoose;
const { autoIncrement } = require('mongoose-plugin-autoinc');

const ShurlSchema = new Schema({
  original_url: String
});

ShurlSchema.plugin(autoIncrement, 'Shurl');
module.exports = mongoose.connection.model('Shurl', ShurlSchema);
