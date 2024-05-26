//express에서 제공하는 라우터 정의
const express = require('express');
const router = express.Router();
const taskApi = require('./taskApi');
const userApi = require('./userApi');

router.use('/tasks',taskApi);
router.use('/user', userApi);

module.exports = router;