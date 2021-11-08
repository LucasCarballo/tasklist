const getTasks = require("../use-cases/get-tasks")

module.exports = class TaskRepository {
    constructor() { }

    getTask(id) {
        return new Error('not implemented');
    }

    getTasks(quantity) {
        return new Error('not implemented');
    }

    addTasks(tasks) {
        return new Error('not implemented');
    }
    
    setAsDone(id) {
        return new Error('not implemented');
    }
}