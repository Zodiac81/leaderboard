//import { Template } from 'meteor/templating';
import '../api/playerslist.js';

// depricated
// Template.leaderboard.player = function(){
//     return "Some other text";
// }

// new one

Template.leaderboard.helpers({
    'player': function(){
        return PlayersList.find();
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
        }

});

Template.leaderboard.events({
    'click .player': function(){
        let playerId = this._id
        Session.set('selectedPlayer', playerId);
    }
});
