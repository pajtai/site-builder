'use strict';

var db = require('../../db'),
    jade = require('jade');

module.exports = function(req, res, next) {
    var name = req.params.name;

    db.db.collection('modules').findOneAsync({
        _id : name
    })
        .then(function(doc) {
            doc = doc || { template:'', data : '{}'};
            res.cache(require.resolve('./view.jade'), {
                title : name,
                template : doc.template,
                data : doc.data,
                output : jade.compile(doc.template)(JSON.parse(doc.data))
            });
        })
};