const Task = require("../model/Task");

const taskController = {};


//할 일 생성
taskController.createTask = async (req, res) => {
    try {
        const { task, isComplete } = req.body;
        const newTask = new Task({task, isComplete });
        await newTask.save();

        res.status(200).json({ status: 'ok', data: newTask });
    } catch (error) {
        res.status(400).json({ status: 'fail', error: error });
    }
}


// 할 일 목록 조회
taskController.getTask = async (req, res) => {
    try {
        const taskList = await Task.find({}).select("-__v");
        res.status(200).json({ status: 'ok', data: taskList });
    } catch (error) {
        res.status(400).json({ status: 'fail', error: error });
    }
}

//할 일 수정
taskController.updateTask = async (req, res) => {
    try {
         const task = await Task.findById(req.params.id);
        if (!task) {
            throw new Error("App can not find the task");
        }
        const fields = Object.keys(req.body);
        fields.map((item) => (task[item] = req.body[item]));
        await task.save();
        res.status(200).json({ status: "success", data: task });
    } catch (error) {
        res.status(400).json({ status: "fail", error });
    }
  };


//할 일 삭제
taskController.deleteTask = async (req, res) => {
    try {
        const deleteItem = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ status: "success", data: deleteItem });
    } catch (error) {
         res.status(400).json({ status: "fail", error });
    }
  };

module.exports = taskController;
