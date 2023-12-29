const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFiles');


/*const adminControllers = require('../controllers/adminController');*/
const {
    adminView,
    createView,
    createItem,
    editView,
    editItem,
    deleteItem
} = require('../controllers/adminController');


router.get('/', adminView);
router.get('/create', createView);
router.post('/create', upload.array('images',2), createItem); /* "images" es el name del input*/
router.get('/edit/:id', editView);
router.put('/edit/:id', editItem);
router.delete('/delete/:id', deleteItem);


module.exports = router;

