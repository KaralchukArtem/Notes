const express = require('express');
const router = express.Router();

router.get("/favicon.ico",function(req,res){
    res.sendFile(__dirname + "/favicon.ico");
});

module.exports = router;