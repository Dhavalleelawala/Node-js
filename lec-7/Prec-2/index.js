const express = require('express');
const port = 8081;
const app = express();

app.use(express.urlencoded());

const studentsData = [
  {
    userid : 1,
    name : 'Dhaval',
    email : 'dhaval@gmail.com',
    password : 'dhaval@123',
    phone : 9157882121
  },
  {
    userid : 2,
    name : 'Yash',
    email : 'yash@gmail.com',
    password : 'yash@123',
    phone : 7405623561
  },
  {
    userid : 3,
    name : 'Vrutika',
    email : 'Vrutika@gmail.com',
    password : 'Vrutika@123',
    phone : 8750678965
  }
]


app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.render('index',{
    student : studentsData
  });
});

app.post('/insertdata',(req,res)=>{
  console.log(req.body);
  let userid = req.body.userid;
  let name =  req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let phone = req.body.phone;

  const obj = {
     userid : userid,
     name : name,
     email : email,
     password : password,
     phone : phone
  }
  studentsData.push(obj);
  console.log("Student successfully add.");
  res.redirect('back');
});

app.listen(port,(err)=>{
  if(err){
    console.log("Server not start in Port");
    return false;
  }
  console.log("server start in port: "+port);
});