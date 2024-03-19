const express = require('express');

const port = 8081;

const app = express();

app.use(express.urlencoded());

const empData = [
  {
    eid : 101,
    ename : 'Dhaval Leelawala',
    bsalary : 24000,
    hra : 4000,
    total : 28000
  },
  {
    eid : 102,
    ename : 'Kunal Patel',
    bsalary : 21000,
    hra : 4000,
    total : 25000
  },
  {
    eid : 103,
    ename : 'Kajal Patel',
    bsalary : 18000,
    hra : 2000,
    total : 20000
  }
];

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.render('index',{
    emp : empData
  });
});

app.post('/insertdata',(req,res)=>{
  console.log(req.body);

  let eid = req.body.eid;
  let ename = req.body.ename;
  let bsalary = req.body.bsalary;
  let hra = req.body.hra;
  let total = req.body.total;

  let obj = {
    eid : eid,
    ename : ename,
    bsalary : bsalary,
    hra : hra,
    total : total
  }

  empData.push(obj);
  console.log("Data successfully add on database");

  res.redirect('back');
  
});

app.listen(port,(err)=>{
  if(err){
    console.log("server is not start in port.");
    return false;
  }
  console.log("server start in port: "+port);
})