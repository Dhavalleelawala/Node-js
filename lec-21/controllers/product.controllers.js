const Product = require('../models/product.schema');

const data = async(req,res)=>{
    let P_data = await Product.find();
    res.send(P_data);
}

const create = async(req,res)=>{
  let data = await Product.create(req.body);
  res.send(data);
}

const deleteData = async (req,res)=>{
  let {id} = req.params;
  let data = await Product.findByIdAndDelete(id);
  res.json({deleted: true, data})
} 

const update = async (req,res)=>{
  let {id} = req.params;
  let data = await Product.findByIdAndUpdate(id,req.body);

}

module.exports = {data,create,deleteData,update};