'use strict';

var db = require('../../db'),
    jade = require('jade'),
    path = require('path'),
    BB = require('bluebird');

module.exports = function(req, res, next) {
    var name = path.dirname(req.originalUrl);

    BB.join(
        db.db.collection('pages').findOneAsync({
            _id : name
        }),
        db.db.collection('modules').findAsync({ })
            .then(function(cursor) {
                return cursor.toArrayAsync();
            }),
        function(doc, modules) {


            doc = doc || {
                    _id : name,
                    rows : []
                };

            res.cache(require.resolve('./edit.jade'), {
                title : name,
                rows : doc.rows,
                modules : modules
            });
        }
    )



};