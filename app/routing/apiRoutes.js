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
        //console.log(queue)
        //console.log("this function is running")
        var newFriend = req.body;
        var newFriendScores = newFriend.scores;

        var leastDiff = 100;
        //console.log(Math.abs(-5));
        var buddy;
       
        for (var i=0; i<queue.length;i++){
            var totalDif = 0;
            for (var j=0;j<queue[i].scores.length; j++){
                totalDif += Math.abs( parseInt(queue[i].scores[j]) - parseInt(newFriendScores[j]));
            }
           
            if (totalDif < leastDiff){
                leastDiff = totalDif;
                buddy = queue[i];
            }
        }
        queue.push(newFriend);
        res.json(buddy);
    });

}
