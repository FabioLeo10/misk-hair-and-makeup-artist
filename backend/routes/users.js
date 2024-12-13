const express = require('express');
const users = express.Router();
const userModel = require('../models/UserModel');
const UserModel = require('../models/UserModel');
const { validateUserBody } = require('../middleware/validateUser');
const authorizeRole = require('../middleware/authorizeRole')


users.get('/users', authorizeRole, async (req, res, next) => {
    try {
        const users = await userModel.find() 
        

        if (users.length === 0) {
            return res.status(404).send({
                statusCode: 404,
                message: 'user not found',
            });
        };
        res.status(200).send({
            statusCode: 200,
            users,
        })
    } catch (error) {
        next(error)
    }

});

users.post('/users/create', validateUserBody, async (req, res, next) => {
    console.log(req.body)
    
    const newUser = new UserModel(req.body);

    try {
        const user = await newUser.save()
        res.status(201)
            .send({
                statusCode: 201,
                message: 'User saved succefully',
                user,
            })
    } catch (error) {
        next(error)
    }


})

users.patch('/users/update/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedUser = await UserModel.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        });

        if (!updatedUser) {
            return res.status(404).send({
                statusCode: 404,
                message: 'User not found',
            });
        }

        res.status(200).send({
            statusCode: 200,
            message: 'User updated successfully',
            updatedUser,
        });
    } catch (error) {
        next(error); 
    }
});


users.delete('/users/delete/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).send({
                statusCode: 404,
                message: 'User not found',
            });
        }

        res.status(200).send({
            statusCode: 200,
            message: 'User deleted successfully',
            deletedUser,
        });
    } catch (error) {
        next(error)
    }
});


module.exports = users;
