let mongoose = require('mongoose');

let empresaSchema = {
    name: {
        type: String,
        required: true
    }
};

let schema = new mongoose.Schema(empresaSchema);

module.exports = schema;
module.exports.empresaSchema = empresaSchema;