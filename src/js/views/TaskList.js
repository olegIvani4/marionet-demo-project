/*global App, isset*/
App.module("Tasks", function (Tasks, App, Backbone, Marionette, $, _) {
    'use strict';

    Tasks.Views = Tasks.Views || {};

    Tasks.Views.Row = Marionette.ItemView.extend({
        tagName: 'tr',
        template: '#task-row-tpl'
    });

    Tasks.Views.List =  Marionette.CompositeView.extend({
        template: '#task-list-tpl',
        childView: Tasks.Views.Row,
        childViewContainer: 'tbody'
    });
});