const express = require('express');
const db = require('./config/empDB');


const port = 8081;

const app = express();
app.use(express.urlencoded());
app.use('/api',require('./routers'))

app.listen(port,(err)=>{
  db();
  if(err){
    console.log("server in not start.");
    return false;
  }
  console.log("server start in port: "+port);

})