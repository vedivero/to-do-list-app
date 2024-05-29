//express에서 제공하는 라우터 정의
const express = require('express');
const taskController = require('../controller/taskController');
const authController = require('../controller/authController');
const router = express.Router()

//할 일 추가 (+권한 조회 추가)
router.post('/', authController.authenticate, taskController.createTask);

//할 일 리스트 읽어오기
router.get('/', taskController.getTask);

//할 일 정보 수정
router.put('/:id', taskController.updateTask);

//할 일 정보 삭제
router.delete('/:id', taskController.deleteTask);

//module을 내보내야 사용할 수 있다.
module.exports = router;
