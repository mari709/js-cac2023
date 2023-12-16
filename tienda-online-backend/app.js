const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');


app.use(express.static('public_html'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

const port = 4000; //.env



/*app.get('/ping', (req,res) => res.send('pong'));*/
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));