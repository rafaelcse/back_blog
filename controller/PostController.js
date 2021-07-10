//let CommentModel = require('../models/CommentModel.js');
let PostModel = require('../models/PostModel.js');
//let ReactModel = require('../models/ReactModel.js');

let PostController = {
    find: async (req,res)=>{
    
        let found = await PostModel.findOne({_id: req.params.id})
        .populate({path:'comments', populate:{path:'author'}})
        .populate('author')
        .exec();
        res.json(found);
    },
    all: async (req,res)=>{
        let allposts = await PostModel.find()    
        .populate('comments')
        .populate('author')
        .exec();
        res.json(allposts);
    },
    create: async (req,res)=>{
        let newPost = new PostModel(req.body);
        let saved = await newPost.save();
        res.json(saved);
    },
    update: async (req,res)=>{

        let found = await PostModel.findOne({_id:req.body._id}).then(post => {
            post.title = req.body.title;
            post.description = req.body.description;
        
            post.markModified('title');
            post.markModified('description');
        
            post.save(err => console.log(err));
        });
        res.json(found);
    },


    delete: async (req,res)=>{
        let newPost = await PostModel.findOne({_id: req.params.id}).exec();
        let deleted = await newPost.delete();
        res.json(deleted);
    },
    // user: async (req,res)=>{
    //     let user = await PostModel.find({id: req.params.id}).populate("User");
    //     res.json(user);
    // },
}

module.exports = PostController;