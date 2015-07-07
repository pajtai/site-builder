var MongoClient = require('bluebird').promisifyAll(require("mongodb")).MongoClient;
var out = {
    promise : MongoClient.connectAsync("mongodb://localhost:27017/site-builder")
        .then(function(db) {
            console.log("We are connected");
            out.db = db;
        })
};

// Connect to the db

module.exports = out;