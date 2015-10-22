App.module("Collections", function (Collections, App, Backbone, Marionette, $, _) {
    'use strict';

    Collections.Tasks = Backbone.Collection.extend({
        url: '/api/tasks',
        model: App.Models.Task
    });
});
