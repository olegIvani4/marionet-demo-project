var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    path       = require('path'),
    port       = 5000;

GLOBAL.express = express;
GLOBAL.app     = app;

mongoose.connect('mongodb://localhost/test-app');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.disable('etag'); // caching

    // ROUTES FOR OUR API
    // =============================================================================
    var router    = require('./router.js');

    app.use('/api', router);

    app.get('/',  function(req, res){
        res.sendFile( path.join(__dirname, '../app/index.html'));
    });

    // SHOW STATIC CONTENT
    // =============================================================================
    app.use(express.static( path.join( __dirname, '../app') ));


    // START THE SERVER
    // =============================================================================
    app.listen(port);
    console.log('Magic happens on port ' + port);
});
