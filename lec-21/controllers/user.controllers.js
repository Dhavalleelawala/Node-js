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
  // req.body.password = await bcrypt.hash(req.body.password,10);
  let data = await user.create(req.body);
  // return res.cookie("user",data.id).redirect('/');
  return res.cookie("user",data.id).send(data);
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

const login = async(req,res) => {
    let {email,password} = req.body;
    let data = await user.findOne({email:email});

    if(!data){
      return res.send("invalid email id.");
    }
    console.log(data);
    if(data.password != password){
      res.send("Wrong Password.");
    }
    res.send("Logged in.");
}

const Local = (req,res)=>{
  res.send("logged in by passport local.");
}

const Userlogin = (req,res)=>{
  return res.render('user-login');
}

const Profile = (req,res) =>{
  return res.send(req.user);
}

const Logout = (req,res) =>{
  req.logOut((err)=>{
    if(err){
      console.log(err);
      return
    }
    res.send("logOut");
  })
}

module.exports = {Home,Signup,UpdataData,DeleteData,GetSignup,login,Local,Userlogin,Profile, Logout}; 