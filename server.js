//dependencies

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

//MySql connection
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "friends_db"
// })

//handles data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//goes to these files and executes them
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//listens for page to load and begins program
app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
})