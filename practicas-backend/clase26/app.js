const express =  require('express');
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send('Hola mundo cruel chau');
});

app.listen(port, () => {
    console.log(`Ejemplo app escucha http://localhost:${port}`);
});
