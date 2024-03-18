const express = require('express')

const port = 8040;

const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  return res.render('index');
});

app.listen(port,(err)=>{
  if(err){
    console.log("server not start in port.");
  }
  else
  {
    console.log("server start in port:"+port);
  }
})