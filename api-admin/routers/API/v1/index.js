const {Router} = require('express');

const router = Router();


router.use('/employee',require('./API/v1'))

module.exports = router;