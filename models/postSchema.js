const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./Posts');

const postSchema = require('./postSchema');

module.exports = mongoose.model('Post', postSchema);