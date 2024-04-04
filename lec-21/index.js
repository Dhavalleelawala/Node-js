const express = require('express');
const cookies = require('cookie-parser');
const router = require('./routes/routes');
const db = require('./config/database');
const session = require("express-session");
const LocalAuth = require("./middlewares/localAuth.middleware");
const passport = require('passport');
const p_router = require('./routes/product.router');
const port = 8081;

const app = express();
app.use(cookies());
app.use(session({secret:"private-key"}))
LocalAuth(passport);
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine','ejs');

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(__dirname+'/public'));
app.use(router);
app.use(p_router);
// app.get('/',(req,res)=>{
//   return res.render('index');
// })

app.listen(port,(err)=>{
  db()
  if(err)  {
    console.log("Server not connected.");
  }
  console.log("server start on port: "+port);
})