const express = require('express');

const routes = express.Router();

const multer = require('multer');

const crudControllers = require('../controllers/crudControllers');

// File upload Start.

const storage = multer.diskStorage({
  destination : (req,res,cb)=>{
    cb(null,'uploads/');
  },
  filename : (req,file,cb)=>{
    cb(null,file.originalname);
  }
});

const imageUpload = multer({storage : storage}).single('image');

// File Upload End

routes.get('/',crudControllers.index);
routes.post('/insertData',imageUpload,crudControllers.adddata);


module.exports = routes;