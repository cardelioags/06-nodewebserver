const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.port || 3000;


app.use( express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'David',
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', (req, res) => {
    res.send('Hola Data');
});

app.listen(port, ()=>{
    console.log(`Escuchado en el puerto ${ port }`);
});