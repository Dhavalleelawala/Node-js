const emp = require('../models/empTB');

const getRecord = async(req,res) =>{
  console.log(req.body);
  let data = await emp.create(req.body);
  console.log("Data Add successfully.");
  res.send(data);
}

const showRecord = async(req,res) => {
  let data = await emp.find({})
  res.send(data);
}

module.exports = {getRecord,showRecord};