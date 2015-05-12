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
        },

        events: {
            'click span.upvote-count': 'updateVote'
        },

        render: function() {
            $(this.el).html(this.template({
                models: this.model
            }));
            return this;
        },

        updateVote: function(event) {
            event.preventDefault();
            event.stopPropagation();
            var $el = $(event.target);
            var game_id = parseInt($el.attr('data-gameid'), 10);
        }

    }));

    return GamesView;
});