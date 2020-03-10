var User = require('../models/user');

exports.user_create = function (req, res, next) {
    
    var user = new User(
        {
            name: req.body.name,
            email: req.body.email
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

exports.user_details = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
        if (err) return next(err);
        res.send('user udpated.');
    });
};

exports.user_delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};