const express = require('express');
const email = express.Router();
const { createTransport } = require('nodemailer');

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'nathanael.schneider23@ethereal.email',
        pass: 'Se3MuhW3dMwc369v4y',
    }
});




email.post('/sendEmail', async (req, res, next) => {
    try {
        const {
            recipient,
            subject,
            text
        } = req.body


        const mailOptions = {
            from: 'nathanael.schneider23@ethereal.email',
            to: recipient,
            subject,
            text
        }
        const info = await transporter.sendMail(mailOptions);
        res.status(200)
            .json({
                statusCode: 200,
                message: 'email sent successfully',
                info: info.messageId
            });
    } catch (error) {
        console.log('email sent successfully')
        res.status(500)
            .json({
                statusCode: 500,
                message: 'email not correct',
                error: error.message,
            });
       
    }
})
  

module.exports = email