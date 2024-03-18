const express = require('express');
const port = 8081;
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.render('index');
})

app.listen(port,(err)=>{
  if(err){
    console.log("Server not start in Port");
    return false;
  }
  console.log("server start in port: "+port);
});