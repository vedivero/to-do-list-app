const User = require("../model/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userController = {};

//회원가입 = user 생성
userController.createUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;
        const user = await User.findOne({ email })//email:email

        //가입 정보 체크
        if (user) {
            throw new Error('이미 가입된 회원입니다.');
        }

        //password 암호화
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({ name, email, password: hash });
        await newUser.save();
        res.status(200).json({ status: "success Regist user" });
        console.log("hash : ", hash);

    } catch (error) {

        res.status(400).json({ status: "fail Regist user", error })

    }
};


userController.loginWithEmail = async (req, res) => {

    //  const {이메일, 패스워드}
    //  const 유저정보(이메일)
    //  if(DB.password === client.password){
    //              const publish(token)
    //              send(userInfo, token)
    //  }else{
    //          send Error Msg.
    //}

    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email }, "-createdAt -updatedAt -__v");

        if (user) {
            //DB 패스워드와, 클라이언트가 입력한 패스워드 비교
            const isMatch = bcrypt.compareSync(password, user.password);
            if (isMatch) {
                //publish token
                const token = user.generateToken();
                return res.status(200).json({ status: "Success publish token", user, token })
            }
        }
        throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
    } catch (error) {
        res.status(400).json({ status: "Login fail", message: error.message });
    }
}

userController.getUser = async (req, res) => {
    try {

        const { userId } = req;
        const user = await User.findById(userId);

        if (!user) {
            throw new Error("Can not find user");
        }
        res.status(200).json({ status: "Success get user : ", user });
    } catch (error) {
        res.status(400).json({ status: "Fail get user  : ", message: error.message });
    }
}

module.exports = userController