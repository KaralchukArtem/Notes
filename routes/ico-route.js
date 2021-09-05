const express = require('express');
const router = express.Router();

router.get("/favicon.ico",function(req,res){
    res.sendFile("C:\Users\BlackOuT\Desktop\Project\notes_server\favicon.ico");
});

module.exports = router;