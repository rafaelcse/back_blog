const CommentModel = require('../models/CommentModel.js');
let PostModel = require('../models/PostModel.js');
let ReactModel = require('../models/ReactModel.js');

let ReactController = {
    
    findBy: async (req,res)=>{
        let found = await ReactModel.find(req.body);
        res.json(found);
    },
    find: async (req,res)=>{
        let found = await ReactModel.find({_id: req.params.id});
        res.json(found);
    },
    all: async (req,res)=>{
        let allComments = await ReactModel.find();
        res.json(allComments);
    },
    create: async (req,res)=>{
        let newReact = new ReactModel(req.body);
        let saved = await newReact.save().then((result)=>{
            CommentModel.findOne({_id: req.body.comment},(err,comment)=>{
                if(comment){
                    comment.reacts.push(newReact);
                    res.json({messsage: 'Reacão Adicionada'});
                    comment.save();
                }else{
                   res.json({messsage: 'Erro Desconhecido.'});
                }
            });
        })
    },
    delete: async (req,res)=>{

        let newPost = await ReactModel.findOne(req.body).exec();
        let deleted = await newPost.delete();
        res.json(deleted);

    },
    user: async (req,res)=>{
        let user = await ReactModel.find({id: req.params.id}).populate("User");
        res.json(user);
    },

}

module.exports = ReactController;