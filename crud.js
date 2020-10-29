const { MongoClient } = require('mongodb');

const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/budget_data';

mongoDBClient.connect(url, {useUnifiedTopology: true}, (operationError, dbHandler) => {
    if (operationError) {
        console.log("An error has occurred during the connection process");
    } else {
        console.log("Connected to the database");
        // let data1 = {title: "Eat out", budget: 25, color: "#793E51"};
        // let data2 = {title: "Rent", budget: 375, color: "#C08497"};
        // let data3 = {title: "Grocery", budget: 110, color: "#F7AF9D"};
        // let data4 = {title: "Pharmacy", budget: 30, color: "#F7E3AF"};
        // let data5 = {title: "Date Night", budget: 50, color: "#F3EEC3"};
        // let data6 = {title: "Pets", budget: 20, color: "#427176"};
        // let data7 = {title: "Shopping", budget: 80, color: "#B0D0D3"};
        // dbHandler.db('budget_data').collection('myBudget').insertOne(data7, (operr, opresult) => {
        //     if (operr) {
        //         console.log("Unable to insert data into collection");
        //     } else {
        //         console.log("Insert Successfully");
        //         dbHandler.close();
        //     }
        // })
        
    }
});



