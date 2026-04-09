const express = require('express');
const tasksRouter = express.Router();
const tasksController = require('./tasks.controller.js');

/* taskRouter.get('/', (req, res) => {
  res.send('All Tasks');
});
taskRouter.post('/', (req, res) => {
  res.send('Create a new Task');
}); */
// Get All Tasks
tasksRouter.get("/tasks", tasksController.handleGetTasks);
// POST Create a task
tasksRouter.post("/tasks", tasksController.handlePostTasks);
// PATCH Update a task
tasksRouter.patch("/tasks", tasksController.handlePatchTasks);
// DELETE a task
tasksRouter.delete("/tasks", tasksController.handleDeleteTasks);

  

// taskRouter.post("/tasks", (req, res) => {
//   console.log(req.body);
//   return res.send("Create a new task");
// });
module.exports = tasksRouter;