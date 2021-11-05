const express = require('express');
const taskController = require('../../../controllers/tasks/task-controller');

const tasksRouter = (dependencies) => {
    const router = express.Router();

    const controller = taskController(dependencies);

    router.route('/')
        .get(controller.getTasks)
        .put(controller.completeTask);

    return router;
}

module.exports = tasksRouter;