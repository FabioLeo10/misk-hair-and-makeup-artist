const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
    image: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
        maxlength: 300,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('workSchema', WorkSchema, 'works');
