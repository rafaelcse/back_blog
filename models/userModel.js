const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    user:String,
    email:String,
    password:String,
    // user:{
    //     type:Schema.Types.ObjectId,
    //     ref:"User"
    // }
},{timestamps:true})

module.exports = mongoose.model("User", UserSchema);