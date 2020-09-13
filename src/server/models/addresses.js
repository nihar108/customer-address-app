const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  customerId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  pin: {
    type: String,
    required: true,
    trim: true,
    maxlength: 6
  },
  type: {
    type: String,
    enum: ['Home', 'Office']
  }
}, {
  timestamps: true
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;