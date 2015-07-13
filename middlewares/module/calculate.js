'use strict';

var db = require('../../db'),
    jade = require('jade'),
    _ = require('lodash');

module.exports = function(req, res) {
    res.json({
        output : jade.compile(req.body.template)(JSON.parse(req.body.data))
    });
};