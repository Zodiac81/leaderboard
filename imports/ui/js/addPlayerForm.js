import '../../api/players.js';

Template.addPlayerForm.helpers({
    'title' : function () {
        return 'Add player';
    }

});

Template.addPlayerForm.events({
   'submit form' : function (e) {
       e.preventDefault();
       const inputPlayerField = document.getElementById('playerName');
       const inputPlayerScore = document.getElementById('playersScore')
       let playerVal = inputPlayerField.value;
       const scoreVal = +inputPlayerScore.value;

       const currentUserId = Meteor.userId();
       console.log(currentUserId);

       PlayersList.insert({
           name  : playerVal,
           score : scoreVal,
           createdBy: currentUserId
       });
       //playerVal.value = '';
       Router.go('/');

       return false;
   }
});