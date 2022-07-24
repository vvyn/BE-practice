const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.send("Hellos");
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});

// sample code
/**

app.get("/", function(req, res){
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay ===  6 || currentDay === 0) {
        res.write("<h1>Weekend</h1>");
        res.write("<p>Free time!</p>");
        res.send();
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

 */

/**
app.get("/", function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error: current day is equal to: " + currentDay);
    }
    res.render('list', {kindOfDay: day});
});
 */


//html template
/**
<body>
    <% if (kindOfDay === "Saturday" || kindOfDay === "Saturday") { %>
        <h1 style="color: rgb(66, 12, 66)"><%=kindOfDay%></h1>
    <% } else { %>
        <h1 style="color: rgb(19, 19, 77)"><%=kindOfDay%></h1>
    <% } %>

</body>
*/