const { render } = require("ejs");
const user = require("../models/user.schema");
const bcrypt = require('bcrypt');
// const express = require("express")
// const userRoutes = express.Router()

// userRoutes("/signup",async(req, res)=>{
//  const user =  await user.create(req.body);
//  res.json({msg:"user is added", user})
// })

const Home = async(req,res) =>{
  // let data = await user.find({})
  // res.send(data);
 return res.cookie("name","username").render('index');
}

const Signup = async (req,res) =>{
//   const {username,email,password,cpassword} = req.body;
//   console.log(req.body);
//   const hashedPassword = await bcrypt.hash(password,5)
//  // req.body.password = bcrypt.hash(req.body.password,10);
//   let data = await user.create({username,email,password:hashedPassword,cpassword});

  console.log(req.body);
  req.body.password = await bcrypt.hash(req.body.password,10);
  let data = await user.create(req.body);
  return res.cookie("user",data.id).redirect('/');
}

const UpdataData = async(req,res) =>{
  let {id}=req.params
  await user.findByIdAndUpdate(id,req.body)
  res.send("updated");
}

const DeleteData = async(req,res) =>{
  let {id}=req.params;
  await user.findByIdAndDelete(id);
  res.send("Data Deleted Successfully.");
}

const GetSignup = (req,res) =>{
  return res.render('signup');
}

module.exports = {Home,Signup,UpdataData,DeleteData,GetSignup}; 