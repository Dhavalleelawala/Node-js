const {Router} = require('express');
const {data, create, deleteData, update} = require('../controllers/product.controllers');

const p_router = Router();

p_router.get('/',data);
p_router.post('/create',create);
p_router.delete('delete',deleteData);
p_router.patch('/update',update);

module.exports = p_router;