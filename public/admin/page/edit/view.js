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
                codeOut = editor.getValue().toString(),
                dataOut = editorData.getValue().toString(),
                data = {
                    _id : window.preloaded.title,
                    code : codeOut,
                    data : dataOut
                };
            this.$save.fadeOut();

            // TODO: convert to model.save
            $
                .post('/admin/module/' + window.preloaded.title + '/save', data)
                .done(function(doc) {
                    console.log(doc);
                    self.model.set('output', doc.output);
                    self.$save.fadeIn();
                })
                .fail(function() {
                    self.$save.fadeIn();
                });
        }

        function beforeRender() {
            console.log('done');
            this.outputHtml = this.$('#output').html();
        }


        function afterRender() {
            this.$save = this.$('#save');
            this.$save.removeClass('hide');
            this.model.set('output', this.outputHtml);
        }
    });

