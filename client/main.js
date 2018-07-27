import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import './config/routs.js';

//import bootstrap css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import templates
//import './main.html';
import '../imports/ui/templates/app_layout.html';
import '../imports/ui/templates/leaderboard.html';
import '../imports/ui/templates/navbar.html';
import '../imports/ui/templates/addPlayerForm.html';
import '../imports/ui/templates/scripts.html';
import '../imports/ui/templates/footer.html';
import '../imports/ui/js/leaderboard.js';
import '../imports/ui/js/addPlayerForm.js';


// imports jquery, bootstrap, pooper
// import '../node_modules/jquery/jquery.min';
// import '../node_modules/popper.js/dist/popper.min.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
//import font Ubuntu
//import 'https://fonts.googleapis.com/css?family=Ubuntu';


// import collections
import '../imports/api/players.js'
import '../imports/api/users.js'



