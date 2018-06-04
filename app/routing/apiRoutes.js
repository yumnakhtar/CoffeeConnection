var queue = require("../data/queue.js");
var path = require("path");

module.exports = function(app) {
    //displays JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        console.log(queue);
        res.json(queue);
    });
    //check compatibility and add new friends
    app.post("/api/friends", function(req, res) {
        var newRes = req.body;
        queue.push(newRes);
        res.json(NewRes);
    });

}