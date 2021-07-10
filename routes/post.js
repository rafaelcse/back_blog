var express = require('express');
var router = express.Router();
var verifyJWT = require('../helpers/jwt');

//CONTROLLERS
var PostControllers = require("../controller/PostController.js");
var CommentControllers = require("../controller/CommentController.js");
var ReactControllers = require("../controller/ReactController.js");

router.get('/', PostControllers.all);
router.get('/get/:id', PostControllers.find);
router.post('/save', verifyJWT, PostControllers.create);
router.put('/update', verifyJWT, PostControllers.update);
router.post('/show', verifyJWT, PostControllers.find);
router.delete('/delete/:id', verifyJWT, PostControllers.delete);

router.post('/comments/', verifyJWT, CommentControllers.find);
router.post('/comments/save', verifyJWT, CommentControllers.create);
//router.post('/comments/update', verifyJWT, CommentControllers.update);
router.delete('/comments/delete/:id', verifyJWT, CommentControllers.delete);

router.post('/reacting/get', verifyJWT, ReactControllers.findBy);
router.post('/reacting/save', verifyJWT, ReactControllers.create);
router.delete('/reacting/delete', verifyJWT, ReactControllers.delete);


module.exports = router;
