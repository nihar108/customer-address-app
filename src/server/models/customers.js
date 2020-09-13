const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  id: {
    type: Number,
    required: true,
    min: 0
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Others']
  }
}, {
  timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;