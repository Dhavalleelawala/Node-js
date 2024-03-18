const express = require('express')

const port = 8040;

const app = express();
app.use(express.urlencoded());
const studentData = [
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