var TestApp = Marionette.Application.extend({
        regions: {
            mainRegion: "#mainRegion"
        }
    }),
    App = new TestApp({});

App.on("start", function () {
    if (Backbone.history) {
        Backbone.history.start({
            pushState: true
        });
    }
});