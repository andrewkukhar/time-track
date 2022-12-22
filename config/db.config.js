const mongoose = require('mongoose');
require("dotenv").config();
const models = require("../models");
const MONGODB = process.env.MONGO_URL

mongoose.set('strictQuery', false);
models.mongoose
    .connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });


const db = mongoose.connection;

module.exports = db;