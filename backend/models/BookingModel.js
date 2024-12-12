const mongoose = require('mongoose')

const BookingModel = new mongoose.Schema({ 
    userID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true,
    },
    service: { 
        type: String,
        require: true,
    },
    date: { 
        type: Date,
        require: true,
    },
    time: { 
        type: String,
        require: true,
    },
    notes: { 
        type: String
    }
},{ 
    timestamps: true, 
    strict: true,
})

module.exports = mongoose.model('bookingModel', BookingModel, 'bookings')