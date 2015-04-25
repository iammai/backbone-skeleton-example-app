define([
    'jquery',
    'underscore',
    'backbone',
    'jquery.cookie' // Returns nothing
], function ($, _, Backbone) {

    // Create a global Module pattern that we will use for reusable code
    var App = App || {};
    _.extend(App, {

        handleError: function(error) {

            console.log(error || 'unknown error');

            if (error) {
                //alert('got an error: ' + error.status_code);
                console.log('Error: ', error.error, error.response);
            }
        }
    });

    return App;
});
