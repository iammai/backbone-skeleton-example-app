define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'app/models/game',
    'text!app/templates/games_template.hb',
    'handlebars' // nothing is returned here
], function ($, _, Backbone, App, GamesModel, gamesTemplate) {
    var GamesView = Backbone.View.extend(_.extend({
        el: '#body_container',

        template: Handlebars.compile( gamesTemplate ),

        initialize: function ( options ) {
            var self = this;
        },

        // Backbone events: we can bind events from html elements in the template here
        events: {
            //'keyup .search-input': 'searchQuery',
            //'click .button': 'showButton'
        },

        render: function() {

            $(this.el).html(this.template({
                models: this.model
            }));

            return this;
        }

    }));

    return GamesView;
});