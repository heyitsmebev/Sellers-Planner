// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const Schema = mongoose.Schema;

//  //Schema represent the structure of the table/doc
// const SALT_ROUNDS = 6;  //the number of times we encyrpt 


// const userSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         unique: true,
//         trim: true,
//         lowercase: true,
//         required: true
//     },
//     password: {
//         type: String,
//         trim: true,
//         minLength: 3,
//         required: true
//     }
// }, {
//     timestamps: true,
//     toJSON: {
//         transform: function (doc, ret) {
//             //function is going to accept a document
//             //everything in mongoDB is a document
//             delete ret.password; //it will not include password in our object
//             //only way to see the encyprted password is within the mongoDB
//             return ret;
//             //ret is a record 
//         }
//     }
// });

// userSchema.pre("save", function (next) { //next means to do this next
//     //.pre means pre hook for the model. "before you save the data, do these steps. which is to save"
//     //Save the reference to the user doc 
//     const user = this; //"this" means current object, whoever the user is
//     if (!user.isModified('password')) return next(); //next here means persue the next url
//     bcrypt.hash(user.password, SALT_ROUNDS, function (error, hash) {
//         if (error) return next(error); //the number of times we encyrpt. SALT_ROUNDS
//         user.password = hash; //otherwise set the userpassword to hash value
//         return next(); //go ahead and return the user to the next waiting url
//     })
// });

// const productSchema = new Schema({
//     category: { type: Array, 'default': ['kitchen', 'books', 'home & garden', 'collectibles', 'office products'], required: true },
//     shippingcost: { type: Number, required: true },
//     packagingcost: { type: Number, required: true },
//     productcost: { type: Number, required: true },
//     numofunits: { type: Number, default: 1, required: true },
//     notes: { type: String },
//     status: { type: String, required: true },
//     salesprice: { type: Number, required: true },
//     totalexpense: { type: Number, required: true },
//     netprofit: { type: Number, required: true },
//     user: { type: Schema.Types.ObjectId, ref:"users", required: true }
// }, {
//     timestamps: true,
// });
// // SELECT FROM a INNER JOIN b ON a.id = b.id

// const Users = mongoose.model('users', userSchema, 'users');
// const Products = mongoose.model('products', productSchema, 'products');
// const mySchemas = {'Users': Users, 'Products': Products}
//  //'User' represents the data structure in the DB
// module.exports = mySchemas;
