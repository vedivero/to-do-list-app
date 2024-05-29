//스키마를 정의하는 스크립트 파일
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//스키마 정의
const taskSchema = Schema({
        task : {
            type : String,
            required : true
        },
        isComplete : {
            type : Boolean,
            required : true
        },
        author : {
            type : Schema.Types.ObjectId,
            require : true,
            ref : "User"       //User라는 모델은 참조한다.
        }
    },
    {timestamps:true}//응답 객체에 시간 정보를 표현
);

//model 생성 (몽구스에서 모델을 만들어 주는 기능)
const Task = mongoose.model("Task", taskSchema)

module.exports = Task;
