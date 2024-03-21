const express = require('express');

const port = 8081;

const app = express();

const db = require('./config/database'); //database connection.

const adminTbl = require('./models/adminTbl');

app.use(express.urlencoded());

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  adminTbl.find({}).then((data)=>{
    return res.render('index',{
      record : data
    })  
  }).catch((err)=>{
    console.log(err); 
    return false;
  })
  
})

app.get()

app.post('/insertData',(req,res)=>{
  const {name,email,password} = req.body;
  adminTbl.create({
    name : name, 
    email : email,
    password : password 
  }).then((data)=>{
    console.log("record successfully insert.");
    res.redirect('back'); 
  }).catch((err)=>{
    console.log(err);
    return false;
  })
})

app.listen(port,(err)=>{
  if(err)
  {
    console.log("server is not start in port");
    return false;
  }
  console.log("server start in port: "+port);
});