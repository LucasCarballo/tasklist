const TaskRepository = require('../../contracts/task-repository')
const { v4: uuidv4 } = require('uuid')

module.exports = class InMemoryTaskRepository extends TaskRepository {
    constructor() {
        super();
        this.tasks = [];
    }

    getTask(id) {
        try {
            return this.tasks.find(t => t.id === id);
        } catch (ex) {
            throw new Error(`Unexpected error at InMemoryTaskRepository.getTask, ${error}`)
        }
    }

    getTasks(quantity) {
        try {
            return this.tasks.slice(-quantity);
        } catch (error) {
            throw new Error(`Unexpected error at InMemoryTaskRepository.getTasks, ${error}`)
        }
    }

    addTasks(tasks) {
        try {
            const tasksToAdd = tasks.map(t => {
                return {
                    id: uuidv4(),
                    title: t
                }
            });

            const newTasks = this.tasks.concat(tasksToAdd);
            this.tasks = newTasks;

            return tasksToAdd;
        } catch (error) {
            throw new Error(`Unexpected error at InMemoryTaskRepository.addTasks, ${error}`)
        }
    }

    setAsDone(id) {
        try {
            const taskIndex = this.tasks.findIndex(t => t.id === id);

            if (taskIndex > -1) {
                this.tasks[taskIndex].status = 'complete';
                return this.tasks[taskIndex];
            }

            return undefined;
        } catch (error) {
            throw new Error(`Unexpected error at InMemoryTaskRepository.setAsDone, ${error}`)
        }
    }
}