const express = require('express');

const port = 8081;

const app = express();

app.set('view engine','ejs');

app.use('/',require('./routes'));


app.listen(port,(err)=>{
  if(err){
    console.log("server not start in port");
    return false;
  }
  console.log("server start in port:"+port);
})