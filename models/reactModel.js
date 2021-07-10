const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ReactModel = new Schema({
    action:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    comment:{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    } 
},
{timestamps: true})

module.exports = mongoose.model("React", ReactModel);