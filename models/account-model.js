const mongoose = require('mongoose');

const Lower_Admin_RightsSchema = new mongoose.Schema({
    flag:Boolean,
    key:String
})

const UsersSchema = new mongoose.Schema({
    user_name: String,
    password: String,
    email: String,
    lower_admin_rights:Lower_Admin_RightsSchema
})

exports.AccountSchema = UsersSchema;