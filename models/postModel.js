const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
},
    { timestamps: true })


PostSchema.pre('remove', function (next) {
    this.model('Comment').removeMany({ post: this._id }).exec();
    next();
});


module.exports = mongoose.model("Post", PostSchema);