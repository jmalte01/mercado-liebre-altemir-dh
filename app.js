const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.set('puerto', process.env.PORT|| 3000);

app.listen(app.get('puerto'), () =>console.log(`Servidor corriendo de manera satisfactoria ${app.get('puerto')}`)); 

// a partir de acá defino rutas get
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})

// a partir de acá defino rutas post

app.post('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.post('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.post('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})
