const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estimateSchema = new Schema({
    shippingcost: { type: Number, required: true },
    packagingcost: { type: Number, required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Estimate', estimateSchema);

// category: { type: Array, 'default': ['kitchen', 'books', 'home & garden', 'collectibles', 'office products'], required: true },
// shippingcost: { type: Number, required: true },
// packagingcost: { type: Number, required: true },
// productcost: { type: Number, required: true },
// numofunits: { type: Number, default: 1, required: true },
// notes: { type: String },
// status: { type: String, required: true },
// salesprice: { type: Number, required: true },
// totalexpense: { type: Number, required: true },
// netprofit: { type: Number, required: true },
// user: { type: Schema.Types.ObjectId, ref:"users", required: true }