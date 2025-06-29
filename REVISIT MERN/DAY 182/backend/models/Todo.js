const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);