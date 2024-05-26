const User = require("../model/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userController = {}

//회원가입 = user 생성
userController.createUser = async (req, res) => {
    try{

        const {name, email, password} = req.body;
        const user = await User.findOne({email})//email:email

        //기 가입 정보 체크
        if(user){
            throw new Error('이미 가입된 회원입니다.');
        }

        //password 암호화
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({name,email,password:hash});
        await newUser.save();
        res.status(200).json({status:"success Regist user"});
        console.log("hash : ", hash);

    }catch(error){
        
        res.status(400).json({status:"fail Regist user", error})

    }
}

module.exports = userController