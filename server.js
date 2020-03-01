const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://chris:coder2020@ds261238.mlab.com:61238/heroku_cq350zlj"
mongoose.connect(MONGODB_URI, {
useNewUrlParser: true,
  useFindAndModify: false
});


const db = require("./models");

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});