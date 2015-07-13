define(['masseuse', './collectionRow'], function(masseuse, CollectionRow) {
    return masseuse.Model.extend({
        initialize : initialize,
        addRow : addRow,
        addModule : addModule,
        moduleAdded : moduleAdded,
        picking : picking,
        selected : selected
    });

    function initialize() {
        this.rows = [];
    }

    function addRow() {
        var row = new CollectionRow;
        this.rows.push(row);
        row.on('add', moduleAdded.bind(this));
    }

    function addModule(index) {
        this.rows[index].add({});
        console.log(this.rows[index]);
    }

    function moduleAdded(module) {
        this.trigger('moduleAdded', module)
    }

    function picking(index) {
        this.rows[index].picking = true;
    }

    function selected(module, index) {
        this.set('selectedModule', false);
        this.rows[index].picking = false;
        this.rows[index].add(module);

    }
});