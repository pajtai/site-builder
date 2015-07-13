'use strict';

var db = require('../../db'),
    jade = require('jade'),
    path = require('path');

module.exports = function(req, res, next) {
    var name = req.originalUrl;

    db.db.collection('pages').findOneAsync({
            _id : name
        })
        .then(function(doc) {


            doc = doc || {
                    _id : name,
                    rows : []
                };

            res.cache(require.resolve('./render.jade'), {
                title : name,
                rows : doc.rows
            });
        }
    )



};