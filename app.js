import express from 'express';
import * as url from 'url';
// const hbs = require('hbs');
import hbs from 'hbs';
import * as dotenv from 'dotenv';
dotenv.config();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Jose Manuel Martinez Roca',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Jose Manuel Martinez Roca',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Jose Manuel Martinez Roca',
        titulo: 'Curso de Node'
    });
})

app.get('/index', (req, res) => {   
    res.sendFile(__dirname + '/public/index.html');
})


// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html');
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})