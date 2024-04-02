const {Router} = require('express');

const router = Router();

const addEmployee = require('../../../controllers/addEmployee');
const showEmployee = require('../../../controllers/addEmployee');

router.get('/showRecord',addEmployee.showRecord);
router.post('/getRecord',addEmployee.getRecord);



module.exports= router;