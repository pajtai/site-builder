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
            var self = this;
            event.preventDefault();
            this.pickAModule(context)
                .then(function(module) {

                    self.model.addModule(context.index, {});
                })
        }
        function onSave() {

        }

        function beforeRender() {
            this.model.on('moduleAdded', pickAModule);
        }


        function afterRender() {
            this.$save = this.$('#save');
            this.$save.removeClass('hide');
            this.model.set('output', this.outputHtml);
        }

        function pickAModule(context) {
            var deferred = $.Deferred();
            this.model.picking(context.index);
            console.log('pick a module',this.model.get('modules'));
            return deferred.promise();
        }
    });

