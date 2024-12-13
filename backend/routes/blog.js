const express = require('express');
const blog = express.Router();
const BlogModel = require('../models/BlogModel');
const multer = require('multer')
const cloudinary = require('cloudinary').v2;
const {internalStorage, cloudinaryStorage, filter} = require('../middleware/multer/storages');
const authorizeRole = require('../middleware/authorizeRole')


const upload = multer({storage: internalStorage});
const cloud = multer({storage: cloudinaryStorage, filter: filter  });

blog.get('/blog', async(req, res, next) => {
    try {
        const blog = await BlogModel(req.body);
        res.status(200)
            .send({
                statusCode: 200,
                message: 'blogs successfully loaded',
                blog: blog
            })
    } catch (e) {
        next(e)
    }
})

blog.post('/blog/create', authorizeRole, async(req, res, next) => {
    const newBlog = new BlogModel(req.body);
})

blog.post('/blog/upload/cloud', authorizeRole, cloud.single('img'), async (req, res, next) => {
    try {
        res.status(200).json({img: req.file.path})
    } catch (e) {
        next(e) 
        res.status(500).send({ message: 'Errore durante il caricamento', error: e.message })
    }
})

blog.post('/blog/upload', authorizeRole, upload.single('img'), async(req, res, next) => {
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

module.exports = blog


