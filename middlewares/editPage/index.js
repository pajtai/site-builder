'use strict';

var db = require('../../db'),
    jade = require('jade'),
    path = require('path');

module.exports = function(req, res, next) {
    var name = path.dirname(req.originalUrl);

    db.db.collection('pages').findOneAsync({
        _id : name
    })
        .then(function(doc) {
            doc = doc || {};
            res.cache(require.resolve('./view.jade'), {
            });
        })
};