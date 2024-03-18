const express = require('express');

const port = 8040;

const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    return res.render('index');
});

app.get('/about',(req,res)=>{
    return res.render('about');
});

app.get('/contact',(req,res)=>{
    return res.render('contact');
});

app.listen(port,(err)=>{
    if(err){
        console.log("server not start on port.");
    }
    else{
        console.log("server start on port: "+port);
    }
});