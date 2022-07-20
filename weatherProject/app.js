const express = require("express");
const https = require("https");


//initializzed express app
const app = express();

app.get("/", function(req, res) {

    let temp;
    const url = "https://cat-fact.herokuapp.com/facts";
    //native http node module
    https.get(url, function (response) {
        response.on("data", function (data) {
            const obj = JSON.parse(data);
            const message = obj[0].text;
            const message2 = obj[1].text;

            res.write("<h1>Fact 1: " + message + "</h1>");
            res.write("<h3>Fact 2: " + message2 + "</h3>")

            //can only have 1 res.send, like a return statement so use res.write for multiple lines
            res.send();
        })
    })
})

//callback function
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})