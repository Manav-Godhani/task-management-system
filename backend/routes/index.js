var express = require('express');
var router = express.Router();
var user = require('../controller/userController');

/* GET home page. */
router.post('/register',user.adminregister );
router.post('/',user.adminlogin );
router.post('/sturesgister',user.studresgister );
router.post('/stulogin',user.stulogin );
router.post('/addtask',user.addtask);
router.get('/gettask',user.gettask);
router.post('/updatetask/:id',user.updatetask);
router.get('/deletetask/:id',user.deletetask);

module.exports = router;
