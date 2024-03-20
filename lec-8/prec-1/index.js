const express = require('express');

const port = 8081;

const app = express();

const path = require('path');

app.set('view engine','ejs');

app.use('/',express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
   res.render('index');
})

app.get('/form',(req,res)=>{
  res.render('form');
})

app.listen(port,(err)=>{
  if(err){
    console.log("server not start in port.");
    return false;
  }
  console.log("server start in port: "+port);
});