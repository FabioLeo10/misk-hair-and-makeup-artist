const mongoose = require('mongoose');


const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    img: {
        type: String,
        required: false,
        default: 'https://placehold.co/600x400'
    },
},{
    timestamps: true,
    strict: true
});

module.exports = mongoose.model('blogModel', BlogSchema, 'blog')