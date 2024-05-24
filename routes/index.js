//express에서 제공하는 라우터 정의
const express = require('express')
const router = express.Router()
const taskApi = require('./taskApi')

router.use('/tasks',taskApi)

module.exports = router;