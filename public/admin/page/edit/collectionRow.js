define(['masseuse', './module'], function(massuese, Module) {
    return massuese.Collection.extend({
        model : Module,
        initialize : initialize
    });

    function initialize() {
        this.picking = false;
        this.modules = window.preloaded.modules;
    }
});