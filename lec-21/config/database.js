const mongoose = require('mongoose');
require("dotenv").config()

let url = process.env.DB_URL;
const db =async () =>{
    await mongoose.connect(
        url
        );
    console.log("database Connected.");
}

module.exports=db;