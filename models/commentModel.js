const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    description:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    post:{
        type:Schema.Types.ObjectId,
        ref:"Post"
    },
    reacts:[{
        type:Schema.Types.ObjectId,
        ref:"React"
    }]
},
{timestamps: true})

commentSchema.pre('remove', function(next) {
    this.model('React').remove({comment: this._id}).exec();
    next();
});

module.exports = mongoose.model("Comment", commentSchema);