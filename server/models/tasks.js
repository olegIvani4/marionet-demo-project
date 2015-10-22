var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Tasks = new Schema({
    description: {type: String, trim: true},
    date: {type: Date },
    isDone: {type: Boolean}
});

module.exports = mongoose.model('Tasks', Tasks);
