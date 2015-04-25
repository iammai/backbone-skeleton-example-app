define([
    'jquery',
    'underscore',
    'backbone',
    'config',
    'app/models/game'
], function ($, _, Backbone, config, Game) {
    var GameCollection = Backbone.Collection.extend({
        model: Game,
        //urlRoot: config.apiUrl + '/games',
        url: config.tempGamesJSON
    });

    return GameCollection;
});