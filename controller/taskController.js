const Task = require("../model/Task"); //Task 모델을 가져옴

const taskController = {}; //taskController 객체를 초기화

//할 일 생성
taskController.createTask = async (req, res) => {
    try {
        const { task, isComplete } = req.body; //요청 본문에서 task와 isComplete를 추출
        const newTask = new Task({ task, isComplete }); //새로운 Task 인스턴스를 생성
        await newTask.save(); //새로운 Task를 데이터베이스에 저장
        res.status(200).json({ status: 'success-create', data: newTask }); //성공 응답 전송
    } catch (error) {
        res.status(400).json({ status: 'fail-create', error: error }); //에러 응답 전송
    }
}

//할 일 목록 조회
taskController.getTask = async (req, res) => {
    try {
        const taskList = await Task.find({}).select("-__v"); //모든 Task를 가져오고 '__v' 필드를 제외
        res.status(200).json({ status: 'success-get', data: taskList }); //성공 응답 전송
    } catch (error) {
        res.status(400).json({ status: 'fail-get', error: error }); //에러 응답 전송
    }
}

// 할 일 수정
taskController.updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id); //id로 Task를 찾기
        if (!task) {
            throw new Error("App can not find the task"); //Task를 찾지 못하면 에러 던지기
        }
        const fields = Object.keys(req.body); //요청 본문에서 업데이트할 필드들 추출
        fields.map((item) => (task[item] = req.body[item])); //Task 업데이트
        await task.save(); //Task 저장
        res.status(200).json({ status: "success-Update ", data: task }); //성공 응답 전송
    } catch (error) {
        res.status(400).json({ status: "fail-Update", error }); //에러 응답 전송
    }
};

// 할 일 삭제
taskController.deleteTask = async (req, res) => {
    try {
        const deleteItem = await Task.findByIdAndDelete(req.params.id); //id로 Task 삭제
        res.status(200).json({ status: "success-Delete ", data: deleteItem }); //성공 응답 전송
    } catch (error) {
        res.status(400).json({ status: "fail-Delete", error }); //에러 응답 전송
    }
};

module.exports = taskController; //taskController 모듈을 사용할 수 있도록 내보냄