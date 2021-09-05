const express = require("express");
const mongoose = require("mongoose");
const config  = require("./conect/db");

//-----------------------------Conection.js---------------------------------------------//
const { FriendsSchema } = require('./models/friends-model');
const { NotesSchema } = require('./models/notes-model');
const { UsersSchema } = require('./models/account-model');


const MongoClient = require('mongodb').MongoClient;
const { request } = require("express");

const Notes = mongoose.model('notes', NotesSchema);
const Friends = mongoose.model('friends', FriendsSchema);
// const Users = mongoose.model('users', UsersSchema);

//...подключение к БД
exports.connect = function (callback) {
    mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
          console.log('callback');
          callback(err, client);
    })
  }
//----------------------------------------------------------------------------------------//


const app = express();

//----------------------------------------------------------------------------------------//

// app.use("/", function(req,res){
//     console.log("index");
//     res.sendFile(__dirname + "/index.html");
// });

app.get("/favicon.ico", function(req,res){
    console.log("favicon");
    res.send(__dirname + "/favicon.ico");
    
});

app.get("/addfriends", function(request, response){
    console.log("addfriends");
    mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        
        if(err) return console.log(err);
        client.Friends().find({}).toArray((err, data) => {
            console.log(err, data)
            res.send({result:data});
        }
    //     client.db.collection("friends").find({}).toArray((err, data) => {
    //     console.log(err, data)
    //     res.send({result:data});
    //   }
      );

        console.log('callback');
  })
    // Friends.find({}, (err, friens) => {
    //     if (err) {
    //       console.log(err);
    //       res.send({ status: 'error', message: err.toString() })
    //       return;
    //     }
    //     res.send({ status: 'ok', friens })
    //   });
});
app.get("/removefriends", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});
app.get("/searchfriends", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});
//----------------------------------------------------------------------------------------//

 app.listen(process.env.PORT || 5000);
