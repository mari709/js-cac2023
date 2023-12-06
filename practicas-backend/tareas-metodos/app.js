const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

const PORT = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(expressLayouts);
app.set('layout', 'layouts/layout');


app.use(require('./src/routes/tareasRoutes'));


app.listen(PORT, () => {
    console.log(`corriendo servidor en http://localhost:${PORT}`)});
