const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authController = require("../controller/authController");


//회원가입
router.post("/", userController.createUser);
router.post("/login", userController.loginWithEmail);

//토큰을 통해 유저ID를 조회
router.get("/me", authController.authenticate, userController.getUser);

module.exports = router;