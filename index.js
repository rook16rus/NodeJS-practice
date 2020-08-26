/*
const modul = require('fs');

const data = `
   Hello, man!
   I'm from Nizhnekamsk  
`;

/!*modul.writeFileSync('nodejs.text', data);*!/

const result = modul.readFileSync('nodejs.txt', {encoding: 'utf-8'});
console.log(result);*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) =>
{
    res.render('index')
});

app.post('/', (req, res) =>
{
    const { city } = req.body;

    console.log(city);
    res.render('index')
});

app.listen(3000, () =>
{
    console.log('Server has started on port 3000...');
});