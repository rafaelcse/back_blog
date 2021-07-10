let PostModel = require('../models/PostModel.js');
let CommentModel = require('../models/CommentModel.js');
//let ReactModel = require('../models/ReactModel.js');

let CommentController = {
    find: async (req,res)=>{
        let found = await CommentModel.find({_id: req.params.id});
        res.json(found);
    },
    all: async (req,res)=>{
        let allComments = await CommentModel.find();
        res.json(allComments);
    },
    create: async (req,res)=>{

        let newComment = new CommentModel(req.body);
        let saved = await newComment.save().then((result)=>{

            PostModel.findOne({_id: req.body.post},(err,post)=>{
                if(post){
                    post.comments.push(newComment);
                    res.json({messsage: 'Comentario Criado'});
                    post.save();
                }else{
                   res.json({messsage: 'Erro Desconhecido.'});
                }
            });
        })
    },
    delete: async (req,res)=>{

        let newPost = await CommentModel.findOne({_id: req.params.id}).exec();
        let deleted = await newPost.delete();
        res.json(deleted);

    },
    user: async (req,res)=>{
        let user = await CommentModel.find({id: req.params.id}).populate("User");
        res.json(user);
    },
}

module.exports = CommentController;