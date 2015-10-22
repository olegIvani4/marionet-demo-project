App.module("Tasks", function (Tasks, App, Backbone, Marionette, $, _) {
    'use strict';

    Tasks.Controller = {
        list: function () {
            var tasks = new App.Collections.Tasks([
                {id: 1, description: "Task one"},
                {id: 2, description: "Second task", isDone: true}
            ]);
            //tasks.fetch().done(function () {
                App.mainRegion.show(
                    new Tasks.Views.List({
                        collection: tasks
                    })
                );
            //});
        },

        edit: function (taskId) {

        }
    };

    App.on('tasks:list', Tasks.Controller.list);
    App.on('task:edit', Tasks.Controller.edit);
});