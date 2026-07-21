const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    trim: true
},
  name: {
    type: String,
    required: true,
    trim: true
},
  length: { type: String },
  start: { type: String },
  resort: { type: String },
  perPerson: { type: String },
  image: {
    type: String,
    required: true
},
  description: {
    type: String,
    required: true,
    trim: true
}
});

tripSchema.index({ code: 1 }, { unique: true });
mongoose.model('trips', tripSchema);