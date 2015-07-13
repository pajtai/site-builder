'use strict';

var db = require('../../db'),
    jade = require('jade'),
    BB = require('bluebird');

module.exports = function(req, res, next) {

    BB.join(
        db.db.collection('modules').findAsync({ })
            .then(function(cursor) {
                return cursor.toArrayAsync();
            }),
        db.db.collection('pages').findAsync({ })
            .then(function(cursor) {
                return cursor.toArrayAsync();
            }),
        function(modules, pages) {
            res.cache(require.resolve('./view.jade'), {
                modules : modules,
                pages : pages
            });
        });
};