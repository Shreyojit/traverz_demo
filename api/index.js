const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authController = require("./controllers/authControllers");
const uploadController = require("./controllers/uploadControllers");
const roomController = require("./controllers/roomControllers");
const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

  // middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.use('/images', express.static('public/images'));

app.use("/auth", authController);
app.use("/room", roomController)
app.use('/upload', uploadController)

  app.listen(5001, () => {
    console.log("Backend server is running!");
  });