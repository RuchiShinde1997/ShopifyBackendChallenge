const mongoose = require('mongoose');
const { route } = require('../app');

const productSchema = new mongoose.Schema({
  productTag: { type: String },
  name: { type: String },
  brandName: { type: String },
  quantity: { type: Number },
  unitPrice: { type: Number },
  createDate: {
    type: String,
    default: Date.now
  },
  lastUpdated: {
    type: String,
    default: Date.now
  },
  updatedBy: { type: String },
  deleted: {
    type: Boolean, default: false
  },
  deletionComments: {
    type: String,
    default: ""
  }
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;