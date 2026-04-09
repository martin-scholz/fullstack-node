const { response } = require("express");
const {StatusCodes, ReasonPhrases} = require("http-status-codes");
const createUserProvider = require("./providers/createUser.provider.js");
function handleGetUsers(req, res) {
  res.send("Get Users endpoint");
}
async function handlePostUsers(req, res) {
  const user = await createUserProvider(req, res);

    res.status(StatusCodes.CREATED).json(user);
} 

function handlePatchUsers(req, res) {
  res.send("Update User endpoint");
} 

function handleDeleteUsers(req, res) {
  res.send("Delete User endpoint");
}

module.exports = {
  handleGetUsers,
  handlePostUsers,
  handlePatchUsers,
  handleDeleteUsers
}