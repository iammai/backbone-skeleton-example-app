define([
    'jquery',
    'underscore',
    'backbone',
    'config'
], function ($, _, Backbone, config) {

    var Game = Backbone.Model.extend({
        idAttribute: "game_id",
        urlRoot: config.apiUrl + '/games',
        initialize: function(){

        }
    });

    Game.store = {}; //Use Backbone Data Store
    Game.fetchById = function(game_id) {
        if (Game.store[game_id]) {
            return Game.store[game_id];
        }
        
        var ret = new Game({game_id: game_id}).fetch();
        Game.store[game_id] = ret;
        return ret;
    };

    return Game;
});
