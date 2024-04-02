const express = require('express');

const port = 8081;

const app = express();

app.set('view engine','ejs');

app.use('/',require('./routes'));

app.listen(port,(err)=>{
  if(err){
    console.log("server is not start");
    return false;
  }
  console.log("server is start in port:"+port);
})