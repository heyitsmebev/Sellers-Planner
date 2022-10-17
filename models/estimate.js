const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estimateSchema = new Schema({
    name: { type: String },
    shippingcost: { type: Number, required: true },
    packagingcost: { type: Number, required: true },
    productcost: { type: Number, required: true },
    salesprice: { type: Number, required: true },
    netprofit: { type: Number, required: true },
    category: { 
        type: String,
        enum: ['kitchen', 'books', 'homeandgarden', 'collectibles', 'office products'],
        required: true},
    user: { type: Schema.Types.ObjectId, ref:"users", required: true }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Estimate', estimateSchema);
