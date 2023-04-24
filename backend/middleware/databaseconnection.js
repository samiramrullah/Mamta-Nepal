const mongoose = require('mongoose');
require('dotenv').config();
const databaseconnection = (req, res, next) => {
    console.log("lets");
    mongoose.connect(process.env.ConnectionString)
    .then(() => {
        console.log('Connected to Database');
        next(); // pass control to next middleware
    })
    .catch((err) => {
        console.log(err);
        next(err); // pass error to error handler middleware
    });
}

mongoose.Promise = global.Promise;

module.exports = databaseconnection;
