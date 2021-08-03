const mongoose = require("mongoose");
const configDB = require("./db");

console.log(configDB.db);

mongoose.connect(configDB.db, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});