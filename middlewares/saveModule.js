'use strict';

var db = require('../db');

module.exports = function(req, res, next) {
    console.log('module save');
    console.log(req.body._id);
    db.db.collection('modules').save(req.body);
};