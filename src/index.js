const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const responseFormatter = require('./tasks/middleware/responseFormatter.js');
const {StatusCodes} = require('http-status-codes');
const tasksRouter = require('./tasks/tasks.router.js');
const authRouter = require('./auth/auth.router.js');
const app = express();
const PORT = 3001;
const cors = require('cors');
const userRouter = require('./user/user.router.js');
const mongoose = require('mongoose');

/* const middleWare = function (req, res, next) {
  req.info = {appname: "Tasksmanager", author: "cloudaffle"};
  next();
  };
app.use(middleWare); */
app.use(express.json()); //middleware to parse JSON bodies
console.log(path.join(__dirname, 'app.log')); 
let accessLogStream = fs.createWriteStream(path.join(__dirname,"..", 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
app.use('/', tasksRouter);
app.use('/auth', authRouter);
app.use('/', userRouter); 
app.use(responseFormatter);
app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).json(null);
});

async function bootstrap() {
  try {
  await mongoose.connect('mongodb+srv://mkofi_db_user:PJc3IhJBMJ5mpjg6@cluster0.dqsfhg7.mongodb.net/', {dbName:"fullstackTasks"});
  console.log('Connected to MongoDB');
    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  } catch (error) {
    console.log('Failed to connect to MongoDB', error);
    process.exit(1);
  }
}
bootstrap();


