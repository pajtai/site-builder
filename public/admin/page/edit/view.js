define(['masseuse', './options', 'jquery', 'underscore', './collectionRow'],
    function(masseuse, options, $, _, CollectionRow) {
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
            var self = this,
                json = _.map(this.model.rows, function(row) {
                return row.toJSON()
            });

            console.log('page data to save', json);
            this.model.set('saving', true);

            $.ajax({
                    url: preloaded.title + '/save',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        _id : preloaded.title,
                        rows : json
                    })
                })
                .done(function() {
                    self.model.set('saving', false);
                });
        }

        function beforeRender() {
            var rows = window.preloaded.doc.rows;
            rows = rows.map(function(row) {
                return new CollectionRow(row);
            });
            this.model.rows = rows;
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

