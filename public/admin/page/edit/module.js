define(['masseuse'], function(masseuse) {
    return masseuse.Model.extend({
        defaults : getDefaults
    });

    function getDefaults() {
        return {
            _id : null,
            data : null,
            template : '',
            output : ''
        }
    }
});