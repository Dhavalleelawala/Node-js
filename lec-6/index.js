const express = require('express');
const port = 8020;
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  return res.render('index');
})
// '/home' rauting name dena he.
app.get('/home',(req,res)=>{
  return res.render('home'); // page name dena he
})

app.get('/contact',(req,res)=>{
  return res.render('contact');
})

app.listen(port,(err)=>{
  if(err){
    console.log("server is not connected");
    return false;
  }
  else{
    console.log("server is connected");
  }
});
