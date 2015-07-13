'use strict';

var db = require('../../db'),
    _ = require('lodash'),
    jade = require('jade');

module.exports = function(req, res, next) {
    var name = req.params.name;
    console.log('looking for _id:', name);

    db.db.collection('modules').findOneAsync({
        _id : name
    })
        .then(function(doc) {
            doc = doc || { template:'', data : '{}'};
            res.json(_.extend(doc, {
                output : jade.compile(doc.template)(JSON.parse(doc.data))
            }));
        })
};