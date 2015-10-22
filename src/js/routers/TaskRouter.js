/*global App, window, isset*/
App.module("Tasks", function (Tasks, App, Backbone, Marionette, $, _) {
    'use strict';

    Tasks.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "": "list",
            "edit/:id": "edit"
        }
    });

    var Api = {
        list: function () {
            App.trigger('tasks:list');
        },
        edit: function (id) {
            App.trigger('task:edit', id);
        }
    };

    App.addInitializer(function () {
        new Tasks.Router({
            controller: Api
        });
    });
});