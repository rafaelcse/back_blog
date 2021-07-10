const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/backblog', { useNewUrlParser: true });


// const userSchema = new mongoose.Schema({
//     _id: String,
//     user: String,
//     password: String,
//     email: String
// }, { collection: 'users' }
// );

// const postSchema = new mongoose.Schema({
//     _id: String,
//     title: String,
//     description: String,
//     user_id: Number,
// }, { collection: 'posts' }
// );

// const commentsSchema = new mongoose.Schema({
//     _id: String,
//     post_id: String,
//     description: String,
//     user_id: Number,
// }, { collection: 'comments' }
// );


module.exports = { Mongoose: mongoose}

// , UserSchema: userSchema, PostSchema:postSchema , CommentsSchema:commentsSchema 