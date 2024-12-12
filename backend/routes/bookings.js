const express = require('express');
const bookings = express.Router();
const BookingModel = require('../models/BookingModel');

bookings.get('/bookings', async (req, res, next) => {
    try {
        const bookings = await BookingModel.find();
        res.status(200)
            .send({
                statusCode: 200,
                message: 'bookings successfully loaded!',
                booking: bookings
            })


    } catch (error) {
        next(error)
    }
})

bookings.post('/bookings/create', async (req, res) => {
    try {
        const newBooking = new BookingModel(req.body);
        const saveBooking = newBooking.save()

    } catch (error) {
        next(error)
    }
});

module.exports = bookings
