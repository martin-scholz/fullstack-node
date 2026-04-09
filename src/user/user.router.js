 const express = require('express');
 const userRouter = express.Router();
 const userController = require('./user.controller.js');  

userRouter.get("/user", userController.handleGetUsers);
userRouter.post("/user", userController.handlePostUsers);
userRouter.patch("/user", userController.handlePatchUsers);
userRouter.delete("/user", userController.handleDeleteUsers);  

module.exports = userRouter;