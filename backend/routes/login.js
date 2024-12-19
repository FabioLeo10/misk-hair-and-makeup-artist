const express = require('express');
const login = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');


login.post('/login',  async (req, res, next) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        
        

        if (!user) {
            return res
                .status(404)
                .send({
                    statusCode: 404,
                    message: 'user not found with the given email or password'
                })
        }
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password) 
        
        console.log('Password inserita dall\'utente:', req.body.password);
        console.log('Password hashata nel database:', user.password);

       
        if (!isPasswordValid) {
            return res
                .status(401)
                .send({
                    statusCode: 401,
                    message: 'email or password are not valid'
                })

        }

        const token = jwt.sign({
        
            role: user.role,
            username: user.username,
            dob: user.dob,

        }, process.env.JWT_SECRET,{
            expiresIn: '15m'
        })

        res
            .header('authorization', token)
            .status(200)
            .send({
                statusCode: 200,
                message: 'Login successfully!',
                token
            })
        

    } catch (error) {
        next(error)
    }
})

module.exports = login