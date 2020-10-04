const express = require('express');
const app = express();
const port = 4000;

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

const budget = require('./data.json');
app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});
