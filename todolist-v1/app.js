const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+ "/date.js");

const app = express();

const items = ["Buy Food", "Cook", "Eat"];
const workItems = [];

app.set('view engine', 'ejs');

//bodyParser use
app.use(bodyParser.urlencoded({extended: true}));

//to use static css files
app.use(express.static("public"));


app.get("/", function(req, res){

    let day = date();

    res.render('list', {listTitle: day, newListItem: items});

});

//have to use bodyParser to get input value
app.post("/", function(req, res){

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function(req, res){
    res.render('list', {listTitle: "Work List", newListItem: workItems});
});

app.get("/about", function(req, res){
    res.render('about');
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});