const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// Already created a database
const mongoUri = "mongodb://localhost:27017/crud";

//Connect to mongo
mongoose.connect(mongoUri, {useNewUrlParser: true})
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;


//start listening
app.listen(port, () => console.log(`Server Started in PORT ${port}`));