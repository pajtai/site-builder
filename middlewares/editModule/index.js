'use strict';

var db = require('../../db'),
    jade = require('jade');

module.exports = function(req, res, next) {
    var name = req.params.name;
    console.log('looking for _id:', name);

    db.db.collection('modules').findOneAsync({
        _id : name
    })
        .then(function(doc) {
            doc = doc || { code:'', data : '{}'};
            res.cache(require.resolve('./view.jade'), {
                title : name,
                code : doc.code,
                data : doc.data,
                output : jade.compile(doc.code)(JSON.parse(doc.data))
            });
        })
};