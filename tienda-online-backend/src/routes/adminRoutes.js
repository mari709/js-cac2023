const express = require('express');
const router = express.Router();

/*abstraer en controladores*/
router.get('/', (req, res) => res.send('Route for admin view'));
router.get('/create', (req, res) => res.send('Route for admin/create view GET'));
router.post('/create', (req, res) => res.send('Route for admin/create form view POST'));
router.get('/edit/:id', (req, res) => res.send(`Route for adimin/edit ID: ${req.params.id} view`));
router.put('/edit/:id', (req, res) => res.send(`Route for admin/edit put ID: ${req.params.id} view`));
router.delete('/delete/:id', (req, res) => res.send(`Route for delete item ID: ${req.params.id} view`));
router.get('/login', (req, res) => res.send('Route for login view GET'));
router.post('/login', (req, res) => res.send('Route for login view POST'));
router.get('/register', (req, res) => res.send('Route for register GET'));
router.post('/register', (req, res) => res.send('Route for register GET'));

module.exports = router;
