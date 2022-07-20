const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hellos</h1>");
});

app.get("/contact", function(req, res){
    res.send("<h1>Contact Me</h1>");
});

app.get("/about", function(req, res){
    res.send("<h1>About Me</h1>");
});

app.get("/hobbies", function(req, res){
    res.send("<h1>Tea</h1>");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});
