const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const userSchema = new Schema({
    fullname: { type: String, required: true },
});

const estimatorSchema = new Schema({
    category: { type: String, required: true },
    shippingcost: { type: String, required: true },
    packagingcost: { type: String, required: true },
    productcost: { type: String, required: true },
    numofunits: { type: Number, default: 1, required: true },
    notes: { type: String },
    status: { type: String, required: true },
    total: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref:"users", required: true }
}, {
    timestamps: true,
});
// SELECT FROM a INNER JOIN b ON a.id = b.id

const Users = mongoose.model('users', userSchema, 'users');
const Estimators = mongoose.model('estimators', estimatorSchema, 'estimators');
const mySchemas = {'Users': Users, 'Estimators': Estimators}
 
module.exports = mySchemas;