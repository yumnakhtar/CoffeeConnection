// Your apiRoutes.js file should contain two routes:
var queue = require("../data/queue.js");
var path = require("path");


// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        console.log(queue);
        res.json(queue);
    });

    app.post("/api/friends", function(req, res) {
        var newRes = req.body;
        queue.push(newRes);
        res.json(NewRes);
    });

}