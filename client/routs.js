//устанвливаю шаблон по умолчанию для всех роутов
Router.configure({
    layoutTemplate: 'applicationLayout'
});

Router.route('/', function () {
    this.render('leaderboard');
});

Router.route('/create', function () {
    this.render('addPlayerForm');
});