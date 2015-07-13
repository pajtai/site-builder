define(['masseuse', './options', 'editor', 'editorData'],
    function(masseuse, options, editor, editorData) {
        'use strict';

        return masseuse.plugins.rivets.RivetsView.extend({
            defaultOptions : options,
            onSave         : onSave,
            beforeRender   : beforeRender,
            afterRender    : afterRender
        });

        function onSave() {
            var self = this,
                templateOut = editor.getValue().toString(),
                dataOut = editorData.getValue().toString(),
                data = {
                    _id : window.preloaded.title,
                    template : templateOut,
                    data : dataOut
                };
            this.$save.fadeOut();

            // TODO: needs to be json send
            // TODO: convert to model.save
            $
                .post('/admin/module/' + window.preloaded.title + '/save', data)
                .done(function(doc) {
                    self.model.set('output', doc.output);
                    self.$save.fadeIn();
                })
                .fail(function() {
                    self.$save.fadeIn();
                });
        }

        function beforeRender() {
            this.outputHtml = this.$('#output').html();
        }


        function afterRender() {
            this.$save = this.$('#save');
            this.$save.removeClass('hide');
            this.model.set('output', this.outputHtml);
        }
    });

