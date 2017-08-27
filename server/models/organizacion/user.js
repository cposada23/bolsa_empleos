let mongoose = require('mongoose');
let crypto = require('crypto');

let userSchema = {

    companyName: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    hash: String,
    salt: String       // o contraseña

};

let schema = new mongoose.Schema(userSchema);

schema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

schema.methods.validPassword = function (password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

module.exports = schema;
module.exports.userSchema =  userSchema;
