const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Route for Shop view'));
router.get('/item/:id', (req, res) => res.send(`Route to find and retrieve a product from ID: ${req.params.id}`));
router.post('/item/:id/add', (req, res) => res.send('Route for add the current item to the shop cart'));
router.get('/cart', (req, res) => res.send('route for cart view'));
router.post('/cart', (req, res) => res.send('route for go to checkout page'));

module.exports = router;
