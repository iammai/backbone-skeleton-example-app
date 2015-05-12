// Environmental Variables
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    var baseUrl = 'http://localhost';
    var config = {
        location: 'local', // This can be local, development, or production
        apiUrl: baseUrl + '/api',
        tempGamesJSON: 'app/data/games.json',
        tempGameDetailsJSON: 'app/data/game.json'

    };


    return config;
});
