//import { Template } from 'meteor/templating';
import '../../api/playerslist.js';

// depricated
// Template.leaderboard.player = function(){
//     return "Some other text";
// }

// new one

Template.leaderboard.helpers({
    'player': function(){
        return PlayersList.find({}, { sort: {score: -1, name: 1} });
    },
    'count' : function() {
        return PlayersList.find().count()
    },
    'selectedClass': function(){
        let playerId = this._id;
        let selectedPlayer = Session.get('selectedPlayer');
        if(playerId == selectedPlayer){
            return "selected"
        }
    },
    'selectedPlayer' : function () {
        let selectedPlayer = Session.get('selectedPlayer');
        return PlayersList.findOne({_id:selectedPlayer});
    },
    'title' : function () {
        return 'Leadeboard';
    },

});

Template.leaderboard.events({
    'click .player': function(){
        let playerId = this._id
        Session.set('selectedPlayer', playerId);
    },
    'click .increment': function(){
        let selectedPlayer = Session.get('selectedPlayer');
        PlayersList.update({ _id: selectedPlayer }, { $inc: {score:5} });
    },
    'click .decrement': function(){
        let selectedPlayer = Session.get('selectedPlayer');
        PlayersList.update({ _id: selectedPlayer }, { $inc: {score:-5} });
    }
});
