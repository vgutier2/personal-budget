const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const budgetModel = require("./myBudget_schema");
let url = 'mongodb://localhost:27017/budget_data';

app.use(cors());
app.use('/', express.static('public'));
app.use(bodyParser.json());

app.get('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to the database")
            budgetModel.find({})
                .then((data) => {
                    console.log(data)
                    res.json(data)
                    mongoose.connection.close()
                })
                .catch((connectionError) => {
                    console.log(connectionError)
                })
    })
});

app.post('/add', (req, res) => {
    console.log(req.body)
    mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true })
        .then(() => {
            newData = {
                title: req.body.title,
                budget: req.body.budget,
                color: req.body.color
            }
            budgetModel.insertMany(newData)
            .then((data) => {
                res.json(data)
                mongoose.connection.close()
            })
            .catch((connectionError) => {
                console.log(connectionError)
            })
        })
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
