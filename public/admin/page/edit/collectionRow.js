define(['masseuse', './module'], function(massuese, Module) {
    return massuese.Collection.extend({
        model : Module,
        initialize : initialize,
        editModule : editModule,
        onSave : onSave
    });

    function initialize() {
        this.picking = false;
        this.modules = window.preloaded.modules;
    }

    function editModule(event, context) {
        if (this.editing) {
            this.modulemodel = null;
            this.editing = false;
        } else {
            this.modulemodel = this.at(context.index);
            this.editing = true;
        }
    }

    function onSave() {
        var self = this;
        $
            .post('/admin/module/calculate', this.modulemodel.attributes)
            .done(function(doc) {
                self.modulemodel.set('output', doc.output);
            });
    }
});