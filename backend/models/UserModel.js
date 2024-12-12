const mongoose = require('mongoose');
const allowedGender = ['M', 'F', 'NS'];
const role = ['admin', 'editor', 'user'];

const UserSchema = new mongoose.Schema({ 
    name: { 
        type: String,
        require: true,
        trim: true,
    },
    surname: { 
        type: String,
        require: true,
        trim: true,
    },
    email: { 
        type: String,
        require: true,
        unique: true,
    },
    dob: { 
        type: Date,
        required: true,
    },
    password: { 
        type: String,
        required: true,
        minLength: 8,
    },
    username:{ 
        type: String,
        required: true,
        minLength: 3,
    },
    role: { 
        type: String,
        required: false,
        enum: role,
        default: 'user',
        
    },
    gender: { 
        type: String,
        required: false,
        enum: allowedGender, 
        default: 'not specified',
    },

    address: { 
        type: String,
        required: false,
    } 
    
}, { 
    timestamps: true, 
    strict: true,
});

module.exports = mongoose.model('userModel', UserSchema, 'users')