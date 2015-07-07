'use strict';

var db = require('../../db');

module.exports = function(req, res, next) {
    var name = req.params.name;
    console.log('looking for _id:', name);

    db.db.collection('modules').findOneAsync({
        _id : name
    })
        .then(function(doc) {
            doc = doc || {code:''};
            console.log('doc is', doc);
            res.cache(require.resolve('./view.jade'), {
                title : name,
                code : doc.code
            });
        })
};