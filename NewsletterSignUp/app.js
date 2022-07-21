const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();
//for server to serve up static files (css, imgs) --> created "public folder"
//specifies static folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var userEmail = req.body.uEmail;

    var data = {
        members: [
            {
                email_address: userEmail,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data);

    var url;

    var options = {
        method: "POST",
        auth: "vvyn:7e11a57f5c4c6c702834335242be68a4-us11",
    }

    const request = https.request(url, options, function(response) {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })
});

//when click on fail btn, will take u back to sign up page
app.post("/failure", function(req, res){
    res.redirect("/");
});


app.listen(3000, function() {
    console.log("The server is running on port 3000.")
});

//MailChimp API Key
//7e11a57f5c4c6c702834335242be68a4-us11

//problems fining list key in mailchimp


//GITHUB only supports static content, so cannot use it to deply this app
//Heroku-- free, great service