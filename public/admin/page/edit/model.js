define(['masseuse', './collectionRow'], function(masseuse, CollectionRow) {
    return masseuse.Model.extend({
        initialize : initialize,
        addRow : addRow,
        addModule : addModule,
        moduleAdded : moduleAdded,
        picking : picking,
        defaults : getDefaults
    });

    function initialize() {
        this.rows = [];
        console.log('p', window.preloaded.modules);
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

    function getDefaults() {
        return {
            modules : window.preloaded.modules
        };
    }
});