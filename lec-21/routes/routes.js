const {Router} = require('express');
const {Home,Signup,UpdataData, DeleteData, GetSignup} = require('../controllers/user.controllers');
const {valid,isAuth} = require('../middlewares/user.middleware');

const router = Router();

router.get('/',isAuth,Home);

router.post('/signup',valid,Signup);
router.patch('/updateData/:id',UpdataData)
router.delete('/deleteData/:id',DeleteData)
router.get('/signup',GetSignup);

module.exports = router;