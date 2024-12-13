const express = require('express');
const works = express.Router();
const WorkModel = require('../models/WorkModel');
const authenticateToken = require('../middleware/authenticateToken');
const {internalStorage, cloudinaryStorage, filter} = require('../middleware/multer/storages');
const authorizeRole = require('../middleware/authorizeRole');
const multer = require('multer')

const upload = multer({storage: internalStorage});
const cloud = multer({storage: cloudinaryStorage, filter: filter  });


works.get('/works', async (req, res, next) => {
    try {
        const works = await WorkModel
            .find()
            .sort({ createdAt: -1 });
        res
            .status(200) 
            .send({
                statusCode: 200,
                message: 'blogs successfully loaded',
                blog: blog
            })
    } catch (e) {
        next(e);
    }
});


works.post('/works/create',  authorizeRole, async (req, res, next) => {
    try {
        const { description } = req.body;
        const file = req.file; 

        const result = await cloudinary.uploader.upload(file.path, {
            folder: 'upload',
        });

        
        const newWork = new WorkModel({
            image: result.secure_url,
            description,
        });

        await newWork.save();

        res.status(201).json({
            message: 'Work successfully created!',
            work: newWork,
        });
    } catch (e) {
        next(e);
    }
});

works.post('/works/upload/cloud', authorizeRole, cloud.single('img'), async (req, res, next) => {
    try {
        res.status(200).json({img: req.file.path})
    } catch (e) {
        next(e) 
        res.status(500).send({ message: 'Errore durante il caricamento', error: e.message })
    }
})

works.post('/works/upload', authorizeRole, upload.single('img'), async(req, res, next) => {
    try {
        const url = `${req.protocol}://${req.get('host')}`;
        const imgUrl = req.file.filename
        res.status(200).json({
            message: 'File caricato con successo!',
            img: `${url}/uploads/${imgUrl}`
        })
        
    } catch (e) {
        next(e)
        
    }
})


works.delete('/works/:id', authenticateToken, authorizeRole, async (req, res, next) => {
    try {
        const { id } = req.params;

        const work = await WorkModel.findByIdAndDelete(id);
        if (!work) {
            return res.status(404).send({ message: 'Work not found!' });
        }

        res.status(200).send({ message: 'Work successfully deleted!' });
    } catch (e) {
        next(e);
    }
});

module.exports = works;

