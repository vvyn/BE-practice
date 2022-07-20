const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//.text or .json or .urlencoded


//__dirname gets the current location of file
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("Result " + result);
});


//BMI
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var result = (weight*703)/(height*height);

    res.send("Your BMI is: " + result);
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

//fe is on client's browser, static files
//running on be runs on server rather than clients server
