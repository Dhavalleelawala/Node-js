const { render } = require('ejs');
const express = require('express');
const port = 8081;
const app = express();

app.use(express.urlencoded());

let studentsData = [
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

app.get('/deleteData',(req,res)=>{
  let userid = req.query.userid;
  let newRecode = studentsData.filter((val)=>{
    return val.userid != userid;
  });
  studentsData = newRecode;
  res.redirect('back');
});

app.get('/editData',(req,res)=>{
  let userid= req.query.userid;
  let newRecode = studentsData.filter((val)=>{
    return val.userid == userid;
  });
  res.render('edit',{
    data : newRecode[0]
  });
}); 
  
app.post('/editData',(req,res)=>{
  let editId =  req.body.editId;

  let updateData = studentsData.filter((currData)=>{
    if(currData.userid == editId){
      currData.userid = req.body.editId;
      currData.name = req.body.name;
      currData.email = req.body.email;
      currData.password =req.body.password;
      currData.phone = req.body.phone;
    }

    return currData;
  });

  studentsData = updateData;
  res.redirect('/');

})

app.listen(port,(err)=>{
  if(err){
    console.log("Server not start in Port");
    return false;
  }
  console.log("server start in port: "+port);
});