//express에서 제공하는 라우터 정의
const express = require('express');
const taskController = require('../controller/taskController');
const router = express.Router()

//할 일 추가
router.post('/',taskController.createTask);

//할 일 리스트 읽어오기
router.get('/',taskController.getTask);

router.put('/:id',(req,res)=>{
    res.send('update task')
});

router.delete('/:id',(res,req)=>{
    res.send('delete tasks')
});

//module을 내보내야 사용할 수 있다.
module.exports = router;

