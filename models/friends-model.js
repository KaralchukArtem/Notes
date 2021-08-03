const mongoose = require('mongoose');

const FriendsSchema = new mongoose.Schema({
    id: String,
    user_name: String
})

exports.FriendsSchema = FriendsSchema;