const {CloudinaryStorage} = require("multer-storage-cloudinary");
const {v2: cloudinary} = require("cloudinary");
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'blog-server-images', 
        allowed_formats: ['jpg', 'png', 'jpeg', 'mp4'],
        format: async (req, file) => 'jpg', 
        public_id: (req, file) => {
            const name = file.originalname.split('.')[0];
            return `${name}-${Date.now()}`;
        },
    },
});


const internalStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = file.originalname.split('.').pop();
        cb(null,`${file.fieldname}-${uniqueSuffix}-${fileExtension}`)
    }
});

const filter = (req, file, cb) => {
    const allowedTypes = ['image/png', 'image/jpeg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only .png and .jpeg files are allowed!'), false);
    }
};




module.exports = {
    cloudinaryStorage,
    internalStorage,
    filter
}