define(function() {
    var editor = CodeMirror.fromTextArea(document.getElementById("editorData"), {
        mode : {name : "jade", alignCDATA : true},
        lineNumbers : true
    });
    console.log('created editor');
    return editor;
});