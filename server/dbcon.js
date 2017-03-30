'use strict';

const mongoose = require('mongoose');

//Setting up db connection
mongoose.connect('mongodb://terravibe:Qweasd123@ds157829.mlab.com:57829/heroku_f56z212v');

const db = mongoose.connection;

//Handling db connection error
db.on('error', function (err) {
    console.error('connection error:', err);
});


//Once the connection opened start seeding the db
db.once('open', function () {
    console.log('db connection successful');
});