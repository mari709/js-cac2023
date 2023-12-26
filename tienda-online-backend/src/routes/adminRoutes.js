const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

/*const adminControllers = require('../controllers/adminController');*/
const {
    adminView,
    createView,
    createItem,
    editView,
    editItem,
    deleteItem
} = require('../controllers/adminController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/img/products')),
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, `${Date.now()}-${file.originalname}`)
    }
    
})

const upload = multer({storage});

router.get('/', adminView);
router.get('/create', createView);
router.post('/create', upload.array('images',2), createItem); /* "images" es el name del input*/
router.get('/edit/:id', editView);
router.put('/edit/:id', editItem);
router.delete('/delete/:id', deleteItem);


module.exports = router;

