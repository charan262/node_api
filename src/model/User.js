import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let User = new Schema({
    name: String,
    dob: Date,
    age: { type: Number, min: 18, max: 65, required: true },
    updated: { type: Date, default: Date.now() }
  });

export default mongoose.model('user', User);

