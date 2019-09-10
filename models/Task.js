const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Task = mongoose.model("Tasks", TaskSchema);

module.exports = Task;
