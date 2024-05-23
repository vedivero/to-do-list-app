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
        }
    },
    {timestamps:true}
);

//model 생성 (몽구스에서 모델을 만들어 주는 기능)
const Task = mongoose.model("Task", taskSchema)

module.exports = Task;
