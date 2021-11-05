module.exports = class Database {
    constructor() {
        this.taskRepository = null;
    }

    initDatabase() {
        return Promise.reject(new Error('not implemented'));
    }
}