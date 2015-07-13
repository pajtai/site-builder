'use strict';

var db = require('../../db'),
    jade = require('jade'),
    _ = require('lodash');

module.exports = function(req, res) {
    db.db.collection('pages')
        .saveAsync(req.body)
        .then(function() {
            res.sendStatus(200);
        });
};