const express = require('express');

const port = 8081;

const path = require('path');

const fs = require('fs');

const app = express();

const db = require('./config/database');

const emp = require('./model/empTB');


app.use(express.urlencoded());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
const multer = require('multer');

// file upload start

const fileupload = multer.diskStorage({
  destination : (req,res,cb) => {
    cb(null,'uploads/');
  },
  filename : (req,file,cb)=>{
    cb(null,file.originalname);
  }
})

const ImageUpload = multer({storage : fileupload}).single('image');

// file upload end

app.set('view engine','ejs');

app.get('/deleteData',(req,res)=>{
  let id = req.query.id;

  emp.findById(id).then((singleRecode)=>{
    fs.unlinkSync(singleRecode.image);
  }).catch((err)=>{
    console.log(err);
    return false;
  })


  emp.findByIdAndDelete(id).then((data)=>{
    console.log("Data Deleted.");
    return res.redirect('/');
  }).catch((err)=>{
    console.log(err);
    return false;
  });
})

app.post('/insertData',ImageUpload,(req,res)=>{

  
  let editId = req.body.editId;
  const {name,email,password,gender,hobby,phone,city} = req.body
  if(editId){

    if(req.file){
      
      emp.findById(editId).then((oldImage)=>{
        fs.unlinkSync(oldImage.image);
        let image = req.file.path;

        emp.findByIdAndUpdate(editId,{
        name : name,
        email : email,
        password : password,
        gender : gender,
        hobby : hobby,
        phone : phone,
        city : city,
        image : image
        }).then((success)=>{
          console.log("data update successfully.");
          return res.redirect('/');
        }).catch((err)=>{
          console.log(err);
          return false;
        })

      }).catch((err)=>{
        console.log(err);
        return err;
      })

    }else{
      emp.findById(editId).then((oldImage)=>{
       let image = oldImage.image;
      emp.findByIdAndUpdate(editId,{
      name : name,
      email : email,
      password : password,
      gender : gender,
      hobby : hobby,
      phone : phone,
      city : city,
      image : image
      }).then((success)=>{
        console.log("data update successfully.");
        return res.redirect('/');
      }).catch((err)=>{
        console.log(err);
        return false;
      })

      }).catch((err)=>{
        console.log(err);
        return false;
      });
    }

  }else{
    let image = "";
    if(req.file){
      image = req.file.path;
     }
      emp.create({
      name : name,
      email : email,
      password : password,
      gender : gender,
      hobby : hobby,
      phone : phone,
      city : city,
      image : image
    }).then((data)=>{
      console.log("Data insert successfully.");
      return res.redirect('back');
    }).catch((err)=>{ 
      console.log(err);
      return false;
    })
  } 
  
})

app.get('/',(req,res)=>{
  emp.find({}).then((data)=>{
    return res.render('index',{
      empData : data
    })
  }).catch((err)=>{
    console.log(err);
    return false;
  })
})

app.get('/editData',(req,res)=>{
  let id = req.query.id;
  emp.findById(id).then((single)=>{
    return res.render('form',{
      single
    });
  }).catch((err)=>{
    console.log(err);
    return false;
  })
})

// app.post('/updateData',(req,res)=>{
//   const {editId,name,email,password,gender,hobby,phone,city} = req.body
//   emp.findByIdAndUpdate(editId,{
//     name : name,
//     email : email,
//     password : password,
//     gender : gender,
//     hobby : hobby,
//     phone : phone,
//     city : city
//   }).then((success)=>{
//     console.log("data update successfully.");
//     return res.redirect('/');
//   }).catch((err)=>{
//     console.log(err);
//     return false;
//   })
// })

app.listen(port,(err)=>{
  if(err){
    console.log("server not start in port");
    return false;
  }
  console.log("server start in port: "+port);
})