var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var UserController = require("../controller/UserController.js");

router.post('/login', UserController.login);
router.post('/registro', UserController.save);

// LOGOUT
router.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
})



module.exports = {

  verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}


}

module.exports = router;
