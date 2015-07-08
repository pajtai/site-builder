define(function() {
    var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
        mode : {name : "javascript", json : true},
        lineNumbers : true
    });
    console.log('created editor data');
    return editor;
});