let tasks = require('../models/taskModel');

exports.getTasks = (req, res) => res.json(tasks);

exports.addTask = (req, res) => {
  const task = { id: Date.now(), ...req.body };
  tasks.push(task);
  res.status(201).json(task);
};

exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.status(204).send();
};
