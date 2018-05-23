const mongoose = require('mongoose');

const { Schema } = mongoose;

const SearchSchema = new Schema({
  term: String,
  when: { type: Date, default: Date.now }
});

module.exports = mongoose.connection.model('ISearch', SearchSchema);
