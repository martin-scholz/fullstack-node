const Task = require("../task.schema.js");


async function deleteTasksProvider(req, res) {
  return await Task.deleteOne(req.body);
}

module.exports = deleteTasksProvider;