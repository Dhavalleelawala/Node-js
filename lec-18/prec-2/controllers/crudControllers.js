const crudTB = require('../models/crudTB');

const index = (req,res)=>{
  return res.render('add');
}

const adddata = (req,res)=>{
  const {name,email,password,gender,hobby,city} = req.body;
  let image = "";
  if(req.file){
    image = req.file.path;
  }

  crudTB.create({
    name : name,
    email : email,
    password : password,
    gender : gender,
    hobby : hobby,
    city : city,
    image : image
  }).then((data)=>{
    console.log("records add successfully..");
    return res.redirect('back');
  }).catch((err)=>{
    console.log(err);
    return false;
  })
}

module.exports = {
  index,
  adddata
}