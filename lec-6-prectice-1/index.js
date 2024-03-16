const express = require('express');

const port = 8021;

const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  return res.render('index');
})

app.get('/about',(req,res)=>{
  return res.render('about');
})

app.get('/contact',(req,res)=>{
  return res.render('contact');
})

app.get('/blogs',(req,res)=>{
  return res.render('blogs');
})

app.listen(port,(err)=>{
  if(err){
    console.log("Server Not Start");
  }else{
    console.log("Server Start");
  }
});