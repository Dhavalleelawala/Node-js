const express = require('express');

const port = 8081;

const app = express();

const db = require('./config/database')

app.set('view engine','ejs');
 
app.get('/',(req,res)=>{
  return res.render('index');
});

app.listen(port,(err)=>{
  if(err)
  {
    console.log("server is not start in port");
    return false;
  }
  console.log("server is start in port: "+port);
});