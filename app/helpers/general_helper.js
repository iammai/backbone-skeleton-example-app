define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars' // Returns nothing
], function ($, _, Backbone) {

    /* Handlebar helpers can be stored here for use with our templates */

    /*
       Compare Handlebars Helper
        http://doginthehat.com.au/2012/02/comparison-block-helper-for-handlebars-templates/
       * Example usage in template:
       * {{#compare value '===' total}}
       *    // Your code here
       * {{/compare}}
     */
    Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {
        var operators, result;

        if (arguments.length < 3) {
            throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
        }

        if ( rvalue === '#null' ) {
            rvalue = null;
        }

        if (options === undefined) {
            options = rvalue;
            rvalue = operator;
            operator = "===";
        }

        operators = {
            '==': function (l, r) { return l == r; },
            '===': function (l, r) { return l === r; },
            '!=': function (l, r) { return l != r; },
            '!==': function (l, r) { return l !== r; },
            '<': function (l, r) { return l < r; },
            '>': function (l, r) { return l > r; },
            '<=': function (l, r) { return l <= r; },
            '>=': function (l, r) { return l >= r; },
            'typeof': function (l, r) { return typeof l == r; }
        };

        if (!operators[operator]) {
            throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
        }

        result = operators[operator](lvalue, rvalue);

        if (result) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });
});
