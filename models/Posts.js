const post = require('./post');

const Schema = require('mongoose').Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  image: { type: URL, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = postSchema;
