const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:/crud");

const db = mongoose.connection;

db.on('connected',(err)=>{
  if(err){
    console.log("DB not connected.")
    return false;
  }
  console.log("DB is connected successfully..");
})

module.exports = db;
