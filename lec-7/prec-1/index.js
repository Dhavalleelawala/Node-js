const express = require('express')

const port = 8040;

const app = express();
app.use(express.urlencoded());
let studentData = [
  {
    rollno :1,
    name : "Kunal",
    coures : "Front End",
    grade : "A+"
  },
  {
    rollno :2,
    name : "Dhaval",
    coures : "Full Stack",
    grade : "A++"
  },
  {
    rollno :3,
    name : "Radika",
    coures : "Back End",
    grade : "A"
  }
];



app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.render('index',{
    student : studentData
  });
});

app.post('/insertdata',(req,res)=>{
  console.log(req.body);

  let rollno = req.body.rollno;
  let name = req.body.name;
  let coures = req.body.coures;
  let grade = req.body.grade;

  const obj = {
    rollno : rollno,
    name : name,
    coures : coures,
    grade : grade
  }

  studentData.push(obj);
  console.log("Student Data add successfully.");

  res.redirect('back');

});

app.get('/deleteData',(req,res)=>{
  let roll = req.query.rollno;

  let reselt= studentData.filter((val)=>{
    //console.log(val);
    return val.rollno != roll;
  });

  studentData = reselt;
  return res.redirect('back');
});
 
app.get('/editData',(req,res)=>{
  let roll = req.query.rollno;
  let data = studentData.filter((val)=>{
    return val.rollno == roll;
  })


  return res.render('edit',{
    data : data[0]
    
  });
})

app.post('/editdata',(req,res)=>{
  
  let editid = req.body.editid;

  let updatData = studentData.filter((currData)=>{
    if(currData.rollno == editid){
    currData.rollno = req.body.editid;
    currData.name = req.body.name;
    currData.coures = req.body.coures;
    currData.grade = req.body.grade;
    }

    return currData;
  });

  studentData = updatData;
  res.redirect('/');

}); 

app.listen(port,(err)=>{
  if(err){
    console.log("server not start in port.");
    return false;
  }
  else
  {
    console.log("server start in port:"+port);
  }
})