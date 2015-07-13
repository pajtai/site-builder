define(['masseuse'], function(masseuse) {
    return masseuse.Model.extend({
        defaults : {
            title : '',
            rows : [],
            modules : []
        }
    })
});