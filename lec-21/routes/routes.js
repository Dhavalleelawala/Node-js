const {Router} = require('express');
const {Home,Signup,UpdataData, DeleteData, GetSignup, login, Local, Userlogin, Profile, Logout} = require('../controllers/user.controllers');
const {valid,isAuth} = require('../middlewares/user.middleware');
const passport = require('passport');
const profileIsAuth = require('../middlewares/IsAuth');
const router = Router();

router.get('/',isAuth,Home);

router.post('/signup',valid,Signup);
router.patch('/updateData/:id',UpdataData)
router.delete('/deleteData/:id',DeleteData)
router.get('/signup',GetSignup);
router.post('/login',login);
router.post("/local",passport.authenticate("local",{successRedirect:"/",failureRedirect:"/login"}),Local);
router.get("/login",Userlogin);
router.get("/profile",profileIsAuth,Profile);
router.get("/logout",Logout);

module.exports = router;