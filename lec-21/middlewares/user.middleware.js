const valid = (req,res,next) => {
  let {username,password,email,cpassword}=req.body
  console.log(req.body)
  if(username && password && email && password== cpassword){
    
    return next();
  }else{
    res.status(400).send("not valid data");
  }
};

const isAuth = (req,res,next)=>{
  console.log(req.cookies);
  let {user} = req.cookies;
  if(user){
    next();
  }else{
    return res.redirect('signup');
  }
}

module.exports = {valid,isAuth}