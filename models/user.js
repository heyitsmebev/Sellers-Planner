const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            //function is going to accept a document
            //everything in mongoDB is a document
            delete ret.password; //it will not include password in our object
            //only way to see the encyprted password is within the mongoDB
            return ret;
            //ret is a record 
        }
    }
});

userSchema.pre("save", function (next) { //next means to do this next
    console.log('calling before create method')
    //.pre means pre hook for the model. "before you save the data, do these steps. so before you save, do lines 40-48"
    //Save the reference to the user doc 
    const user = this; //"this" means current object, whoever the user is
    if (!user.isModified('password')) return next(); //next here means persue the next url
    // !user.isModified this means that if the password has not been modified, encrypt will be triggered so no interference
    bcrypt.hash(user.password, SALT_ROUNDS, function (error, hash) {
        if (error) return next(error); //the number of times we encyrpt. SALT_ROUNDS
        user.password = hash; //otherwise set the userpassword to hash value
        return next(); //go ahead and return the user to the next waiting url/router
    })
});

module.exports = mongoose.model('User', userSchema);
 //'User' represents the data structure in the DB
