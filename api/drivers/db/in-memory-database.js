const Database = require('../.../../../contracts/database')
const InMemoryTaskRepository = require('./in-memory-task-repository')

module.exports = class InMemoryDatabase extends Database {
    constructor() {
        super();
        this.taskRepository = new InMemoryTaskRepository();
    }

    async initDatabase() {
        
    }
}