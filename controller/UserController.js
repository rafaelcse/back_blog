
let UserModel = require('../models/userModel.js');
var jwt = require('jsonwebtoken');

let UserController = {
    login: async (req,res)=>{
        let found = await UserModel.findOne({user: req.body.user, password: req.body.password });
        if(found){
            //auth ok
            const id = found._id; //esse id viria do banco de dados
            const token = jwt.sign({ id }, process.env.SECRET, {
              expiresIn: 3000 // expires in 5min
            });
            return res.json({ auth: true, token: token, user: found});
        } 
        res.status(500).json({message: 'Login inválido!' });
    },
    find: async (req,res)=>{
        let found = await UserModel.findbyId(req.body.id);
        res.json(found);
    },
    all: async (req,res)=>{
        let allUsers = await UserModel.find();
        res.json(allUsers);
    },
    save: async (req,res)=>{
        let newUser = new UserModel({user:req.body.user, email:req.body.email, password:req.body.password});
        let saved = await newUser.save();
        res.json( saved);
    },
    save: async (req,res)=>{
        let newUser = new UserModel({user:req.body.user, email:req.body.email, password:req.body.password});
        let saved = await newUser.save();
        res.json( saved);
    },
    delete: async (req,res)=>{
        let newUser = new UserModel(req.body);
        let deleted = await newUser.delete();
        res.json(saved);
    },
    user: async (req,res)=>{
        let user = await UserModel.find({id: req.params.id}).populate("User");
        res.json(user);
    },
}

module.exports = UserController;