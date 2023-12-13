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



/*app.get('/ping', (req,res) => res.send('pong'));*/
app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));