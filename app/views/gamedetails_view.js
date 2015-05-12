define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'app/models/game',
    'text!app/templates/gamedetails_template.hb',
    'handlebars' // nothing is returned here
], function ($, _, Backbone, App, GamesModel, gameDetailsTemplate) {
    var GameDetailsView = Backbone.View.extend(_.extend({
        el: '#body_container',

        template: Handlebars.compile( gameDetailsTemplate ),

        initialize: function ( options ) {
            var self = this;
        },

        events: {
        },

        render: function() {
            $(this.el).html(this.template({
                model: this.model
            }));

            return this;
        }

    }));

    return GameDetailsView;
});