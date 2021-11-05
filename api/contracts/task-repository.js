const getTasks = require("../use-cases/get-tasks")

module.exports = class TaskRepository {
    constructor() { }

    getTask(id) {
        return Promise.reject(new Error('not implemented'));
    }

    getTasks(quantity) {
        return Promise.reject(new Error('not implemented'));
    }

    addTasks(tasks) {
        return Promise.reject(new Error('not implemented'));
    }
    
    setAsDone(id) {
        return Promise.reject(new Error('not implemented'));
    }
}