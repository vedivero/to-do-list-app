//스키마를 정의하는 스크립트 파일

const mongoose = require('mongoose')
const schema = mongoose.schema

const taskSchema = schema({
    task : {
        type : String,
        required : true
    },
    isComplete : {
        type : Boolean,
        required : true
    }
})

const Task = mongoose.model("Tast", taskSchema)

module.exports = Task;