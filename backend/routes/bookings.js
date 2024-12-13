const express = require('express');
const bookings = express.Router();
const BookingModel = require('../models/BookingModel');
const authenticateToken = require('../middleware/authenticateToken')
const authorizeRole = require('../middleware/authorizeRole')


bookings.get('/bookings', authorizeRole, async (req, res, next) => {
    try {
        const bookings = await BookingModel.find();
        res.status(200)
            .send({
                statusCode: 200,
                message: 'bookings successfully loaded!',
                booking: bookings
            })


    } catch (e) {
        next(e)
    }
})

bookings.post('/bookings/create', authenticateToken, async (req, res, next) => {
    try {
        const newBooking = new BookingModel(req.body);
        const saveBooking = newBooking.save()

    } catch (e) {
        next(e)
    }
});

bookings.patch('/bookings/:id', authenticateToken, async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedBooking = await BookingModel.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedBooking) {
            return res.status(404).send({
                statusCode: 404,
                message: 'Booking not found!',
            });
        }

        res.status(200).send({
            statusCode: 200,
            message: 'Booking successfully updated!',
            booking: updatedBooking,
        });
    } catch (e) {
        next(e);
    }
});

bookings.delete('/bookings/:id', authenticateToken, async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedBooking = await BookingModel.findByIdAndDelete(id);

        if (!deletedBooking) {
            return res.status(404).send({
                statusCode: 404,
                message: 'Booking not found!',
            });
        }

        res.status(200).send({
            statusCode: 200,
            message: 'Booking successfully deleted!',
        });
    } catch (e) {
        next(e);
    }
});

module.exports = bookings
