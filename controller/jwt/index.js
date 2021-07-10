//index.js
const http = require('http'); 
const express = require('express'); 
const app = express(); 
 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})
  
const server = http.createServer(app); 
server.listen(3000);
console.log("Servidor escutando na porta 3000...");