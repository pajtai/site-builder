define(['masseuse', './options'],
    function(masseuse, options, editor, editorData) {
        'use strict';

        return masseuse.plugins.rivets.RivetsView.extend({
            defaultOptions  : options,
            onSave          : onSave,
            onAddRow        : onAddRow,
            onAddModule     : onAddModule,
            beforeRender    : beforeRender,
            afterRender     : afterRender,
            pickAModule     : pickAModule
        });

        function onAddRow(event) {
            event.preventDefault();
            console.log(this.model.get('rows'));
            this.model.get('rows').push([]);
        }

        function onAddModule(event, context) {
            event.preventDefault();
            this.pickAModule()
                .then(function(module) {
                    context.row.push(module);
                });
        }
        function onSave() {

        }

        function beforeRender() {
        }


        function afterRender() {
            this.$save = this.$('#save');
            this.$save.removeClass('hide');
            this.model.set('output', this.outputHtml);
        }

        function pickAModule() {

        }
    });

