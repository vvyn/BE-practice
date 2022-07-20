//search js callbacks and higher end functions


const express = require("express");


//(best practice) represents express module
const app = express();


//what gets displayed on the page at the port
//best practice request = req, response = res
// "/" is the route targetted
app.get("/", function(req, res){
    res.send("<h1>Hellos</h1>");
});

//route for dif pages
app.get("/contact", function(req, res){
    res.send("<h1>Contact Me</h1>");
});


//listens for http requests sent to server at port 3000
app.listen(3000, function(){
    console.log("server started on port 3000");
});

//use nodemon server.js to auto reload page