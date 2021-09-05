const express = require("express");
const mongoose = require("mongoose");
const config  = require("./conect/db");
const IcoRoute = request("./routes/ico-route");

//-----------------------------Conection.js---------------------------------------------//
const { FriendsSchema } = require('./models/friends-model');
const { NotesSchema } = require('./models/notes-model');
const { AccountSchema } = require('./models/account-model');


const MongoClient = require('mongodb').MongoClient;
const { request } = require("express");

const Notes = mongoose.model('Notes', NotesSchema);
const Friends = mongoose.model('Friends', FriendsSchema);
const Account = mongoose.model('Account', AccountSchema);

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

app.use(IcoRoute);

// app.use("/",function(req,res){
//     res.sendFile(__dirname + "/index.html");
// });


app.get("/addfriends", function(request, response){
    Friends.find({}, (err, friens) => {
        if (err) {
          console.log(err);
          res.send({ status: 'error', message: err.toString() })
          return;
        }
        res.send({ status: 'ok', friens })
      });
});
app.get("/removefriends", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});
app.get("/searchfriends", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});
//----------------------------------------------------------------------------------------//

 app.listen(process.env.PORT || 5000);
