'use strict';

var expressively   = require('expressively'),
    db = require('./db');

module.exports = {
    start : start
};

function start() {
    return db
        .promise
        .then(function() {
            return expressively
                .start({
                    baseDirectory   : __dirname,
                    verbose         : true
                });
        });
}

