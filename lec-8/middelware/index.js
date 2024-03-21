const express = require('express');

const port = 8081;

const app = express();

app.set('view engine','ejs');

const middelware = (req,res,next)=>{
  if(req.query.age>=18){
   return next();
  }
  return res.redirect('/');
}

app.get('/',(req,res)=>{
  return res.render('index');
});

app.get('/about',middelware,(req,res)=>{
  return res.render('about');
});

app.use(middelware);
app.listen(port,(err)=>{
  if(err){
    console.log("server not on in port.");
    return false;
  }
  console.log("server is start in port:"+port);
});