//express에서 제공하는 라우터 정의
const express = require('express')
const router = express.Router()
const taskApi = require('./task.api')

router.use('/tasks',taskApi)

module.exports = router;