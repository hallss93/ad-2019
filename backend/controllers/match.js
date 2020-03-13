const nodemailer = require("nodemailer");

var User = require('../models/user');

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

exports.match = function (req, res, next) {

    // Create Account
    let Account = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD_EMAIL
        }
    });


    // Find All Users
    User.find({}, function (err, users) {
        if (err) return next(err);

        // Array with users shuffled
        let userArray = users
        shuffleArray(userArray)

        // Array with users drawns
        let drawns = [];

        let toDraw = users;

        userArray.map((u, index) => {
            // Index variable for iterating with user array

            // If drawns length not changes
            while (drawns.length == index) {
                let user = toDraw[Math.floor(Math.random() * (1 + toDraw.length - 1 - 0)) + 0]

                // If is not the same person
                if (user._id !== u._id && drawns.indexOf(user._id) < 0) {
                    u.friend = user
                    drawns.push(user._id)
                }
            }
        })


        let promises = []
        userArray.map((u) => {
            const mailOptions = {
                from: process.env.EMAIL,
                to: u.email,
                subject: 'Your secret friend',
                html: '<p>Hello, your secret friend is: ' + u.friend.name + ' (' + u.friend._id + ')</p>'
            };
            promises.push(
                new Promise((resolve) => {
                    Account.sendMail(mailOptions, function (err, info) {
                        if (err) {
                            resolve(err);
                            console.log(err);
                        }
                        else {
                            resolve(info);
                            console.log(info);
                        }
                    });

                })
            )
        })
        console.log(promises.length)
        Promise.all(promises).then(data => {
            res.json({ message: "Successful draw!", data })
        })
    })
};