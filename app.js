const express = require("express");
const mongoose = require("mongoose");
const config  = require("./conect/db");

//-----------------------------Conection.js---------------------------------------------//
const { FriendsSchema } = require('./models/friends-model');
const { NotesSchema } = require('./models/notes-model');
const { AccountSchema } = require('./models/account-model');


const MongoClient = require('mongodb').MongoClient;

const Notes = mongoose.model('Notes', NotesSchema);
const Friends = mongoose.model('Friends', FriendsSchema);
const Account = mongoose.model('Account', AccountSchema);

exports.connect = function (callback) {
    mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
          console.log('callback');
          callback(err, client);
    })
  }
//----------------------------------------------------------------------------------------//


const app = express();
const configDB = config.db;

//----------------------------------------------------------------------------------------//

app.get("/", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});

app.get("/favicon.ico",function(req,res){
    res.sendFile(__dirname + "/favicon.ico");
});

app.get("/addfriends", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});
app.get("/removefriends", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});
app.get("/searchfriends", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});
//----------------------------------------------------------------------------------------//

 app.listen(3000);

