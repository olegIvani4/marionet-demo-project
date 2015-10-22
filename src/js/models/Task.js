App.module("Models", function (Models, App, Backbone, Marionette, $, _) {
    'use strict';

    Models.Task = Backbone.Model.extend({
        urlRoot: '/api/task/',
        defaults: {
            isDone: false
        }
    });
});
