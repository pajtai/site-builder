var MongoClient = require('bluebird').promisifyAll(require("mongodb")).MongoClient;
var out = {
    promise : promise
};

// Connect to the db

module.exports = out;

function promise(dbName) {
    return MongoClient.connectAsync("mongodb://localhost:27017/" + dbName)
        .then(function(db) {
            console.log("We are connected");
            out.db = db;
        })
}