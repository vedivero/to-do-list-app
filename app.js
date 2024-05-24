//Node.js에서 Express.js를 사용하는 데 필요한 설정을 하는 코드
const express = require("express");
//Mongoose 라이브러리를 사용할 수 있도록 설정
const mongoose = require("mongoose");
//body-parser 라이브러리를 애플리케이션으로 가져오는 코드
const bodyparser = require("body-parser")
//app.js에서 index.js를 사용할 수 있도록 설정
const indexRouter = require("./routes/index")

//Express 애플리케이션 인스턴스를 생성
const app = express();
//body-parser 미들웨어를 애플리케이션에 추가하여 JSON 형식의 요청 본문을 파싱하도록 설정
app.use(bodyparser.json());
//app은 /api가 요청될 때 indexRouter를 사용
app.use("/api",indexRouter)

//setting mongoose
const mongoURI = `mongodb://localhost:27017/to-do-list-app`

//DB 연결
mongoose
    .connect(mongoURI).then(()=>{
        console.log("mongoose connected");
    }).catch((err)=>{
        console.log("DB connection fail");
    });


//app listener 설정
//port number 5000을 주시, 모든 request가 5000으로 전달
app.listen(5000, ()=>{
    console.log("server on 5000");
});