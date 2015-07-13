define(['masseuse', './options', 'jquery'],
    function(masseuse, options, $) {
        'use strict';

        return masseuse.plugins.rivets.RivetsView.extend({
            defaultOptions  : options,
            onSave          : onSave,
            onAddRow        : onAddRow,
            onAddModule     : onAddModule,
            pickAModule     : pickAModule,
            beforeRender    : beforeRender,
            afterRender     : afterRender
        });

        function onAddRow(event) {
            event.preventDefault();
            this.model.addRow();
        }

        function onAddModule(event, context) {
            event.preventDefault();
            this.pickAModule(context);
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

        function pickAModule(context) {
            var self = this;
            this.model.picking(context.index);
            this.model.once('change:selectedModule', function(model, selectedModule) {

                $
                    .get('/admin/module/' + selectedModule + '/json')
                    .done(function(data) {
                        self.model.selected(data, context.index);
                    });
            });
        }
    });

