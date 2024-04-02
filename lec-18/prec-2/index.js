const express = require('express');

const port = 8081;

const app = express();

const db = require('./config/database');

app.set('view engine','ejs');

app.use(express.urlencoded());

app.use('/',require('./routes'));





app.listen(port,(err)=>{
  if(err){
    console.log("server not connected.");
    return false;
  }
  console.log("server connecte in port: "+port);
});