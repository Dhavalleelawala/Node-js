const mongoose = require('mongoose');

const db =async (req,res)=>{

await mongoose.connect(
  "mongodb+srv://dhavalleelawala:employee@cluster0.k1savui.mongodb.net/"
)
console.log("DB Connected Successfully.");
 }

 module.exports = db;