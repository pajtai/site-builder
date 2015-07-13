'use strict';

var db = require('../../db'),
    jade = require('jade'),
    _ = require('lodash');

module.exports = function(req, res) {
    db.db.collection('modules')
        .saveAsync(req.body)
        .then(function() {
            res.json({
                output : jade.compile(req.body.template)(JSON.parse(req.body.data))
            });
        });
};