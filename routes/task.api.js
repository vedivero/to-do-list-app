//express에서 제공하는 라우터 정의
const express = require('express')
const router = express.Router()

//할 일 추가
router.post('/',(req,res)=>{
    res.send("create task");
});

router.get('/',(req,res)=>{
    res.send('get tasks')
});

router.get('/:id',(req,res)=>{
    res.send('update task')
});

router.get('/:id',(res,req)=>{
    res.send('delete tasks')
});

//module을 내보내야 사용할 수 있다.
module.exports = router;

