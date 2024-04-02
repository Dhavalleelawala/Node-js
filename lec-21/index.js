const express = require('express');
const cookies = require('cookie-parser');
const router = require('./routes/routes');
const db = require('./config/database');


const port = 8081;

const app = express();
app.use(cookies());

app.set('view engine','ejs');

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(__dirname+'/public'));
app.use(router);

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