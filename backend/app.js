require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');

var User = require('./routes/users'); // Imports routes for the users
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'DB_URL';
console.log(process.env.MONGODB_URI)
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', User);

var port = 3003;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});