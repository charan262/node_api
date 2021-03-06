const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let bookInstanceSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: {type: Date, default: Date.now}
  });

bookInstanceSchema
.virtual('url')
.get(() => {
    return '/catalog/bookinstance/' + this._id;
});

module.exports = mongoose.model('BookInstance', bookInstanceSchema);

