let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let jobSchema = {

    // todo: make indexation to the id of this schema
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    candidateType: {
        type: String,
        required: true
    },
    languages: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    technicalRole: {
        type: String,
        required: true
    },
    urgent: {
        type: Boolean,
        required: true
    },
    candidates: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
};

let schema = new mongoose.Schema(jobSchema);

module.exports = schema;
module.exports.jobSchema = jobSchema;