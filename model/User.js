//회원정보 스키마를 정의하는 파일
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const User = mongoose.model("User", userSchema)
module.exports = User;