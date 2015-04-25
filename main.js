require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'jquery.cookie': {     //cookie depends on Jquery and exports nothing
            deps: ['jquery']
        },
        'backbone.validation': {     //backbone.validation depends on Backbone and exports nothing
            deps: ['backbone']
        }
    },
    paths: {
        jquery: 'assets/js/jquery-1.9.1.min',
        underscore: 'assets/js/underscore-min',
        backbone: 'assets/js/backbone-min',
        handlebars: 'assets/js/handlebars',
        text: 'text',
        'jquery.cookie': 'assets/libs/jquery.cookie',
        'backbone.validation': 'assets/libs/backbone-validation'
    }
});

require([
    'backbone',
    'app',
    'router'
], function (Backbone, App, AppRouter) {

    // Initialize routing and start Backbone.history()
    var app_router = new AppRouter();
    Backbone.history.start();

});