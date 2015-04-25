define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    //Helpful re-usable functions for our applications can be stored here

    var util = {

        isInt: function(n) {
            if (typeof n === 'number') {
                return n % 1 === 0;
            }
        }
    };

    return util;
});