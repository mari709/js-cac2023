const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => res.send('Route for home view'));
router.get('/contacto', (req, res) => res.send('Route for contact view'));
router.get('/about', (req, res) => res.send('Route for about view'));
router.get('/faqs', (req, res) => res.send('Route for faqs view'));

module.exports = router;

