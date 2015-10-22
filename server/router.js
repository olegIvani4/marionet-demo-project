var router = express.Router(),
    Tasks = require('./models/tasks.js');

router.route('/tasks/')
    .get(function(req, res) {
        Tasks.find()
            .sort({date: -1})
            .exec(function(err, data) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(data);
                }
            });
    })

    .post(function(req, res) {
        var task = new Tasks();
        task.description = req.body.description;
        task.date = new Date(req.body.date);
        task.isDone = false;

        task.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    id: task._id
                });
            }
        });
    });

router.route('/task/:id')
    .get(function(req, res) {
        Tasks.find({
            _id: req.params.id
        })
            .exec(function(err, data) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(data[0]);
                }
            });
    })

    .put(function(req, res) {
        Tasks.find({
            _id: req.params.id
        })
            .exec(function(err, data) {
                if (err) {
                    res.send(err);
                } else {
                    var task = data[0];

                    task.description = req.body.description;
                    task.date = new Date(req.body.date);
                    task.isDone = req.body.isDone;
                    task.save(function(err) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.json(task);
                        }
                    });
                }
            });
    });

module.exports = router;
