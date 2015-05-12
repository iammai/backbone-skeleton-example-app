define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'app/models/game',
    'app/collections/game_collection',
    'app/views/game_view',
    'app/views/gamedetails_view',
    ''
], function ($, _, Backbone, App, Game, GameCollection, GamesView, GameDetailsView) {

    var AppRouter = Backbone.Router.extend({

        initialize: function() {
            console.log('App initialized');
        },

        routes: {
            '': 'indexRoute',
            'games': 'games',
            'games/:gameid': 'gameDetails'
        },

        // Home page
        indexRoute: function() {
            //Redirects to the games page
            this.navigate('games', true);
        },

        // Games Page
        games: function() {

            var self = this;

            // Create a new collection for all games
            this.gameList = new GameCollection();

            // Fetch the content
            $.when(this.gameList.fetch()).done(function(games) {
                self.gameView = new GamesView({
                    model: games
                });
                self.gameView.render();
            });
        },

        gameDetails: function(id) {
            var self = this;
            this.game = new Game({game_id: id});
            $.when(this.game.fetch()).always(function(game) {
                self.gameDetaislView = new GameDetailsView({
                    model: game
                });
                self.gameDetaislView.render();
            });
        },

    });

    return AppRouter;
});