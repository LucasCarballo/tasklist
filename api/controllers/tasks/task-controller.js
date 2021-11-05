const getTasksUseCase = require('../../use-cases/get-tasks')
const completeTaskUseCase = require('../../use-cases/complete-task')

module.exports = (dependencies) => {
    const { taskRepository } = dependencies.databaseService;
    const { tasksProvider } = dependencies;

    const getTasks = async (req, res, next) => {
        try {
            const getTasks = getTasksUseCase(tasksProvider, taskRepository);
            
            const quantity = req.query.quantity;
            
            const response = await getTasks.execute(quantity);
            
            if (response.error) {
                next(response.error);
            }
            
            res.json(response);
        } catch (ex) {
            next(ex);
        }
    };

    const completeTask = async (req, res, next) => {
        try {
            const completeTask = completeTaskUseCase(taskRepository);
            
            const id = req.body.id;
            if (!id) {
                next('id cannot be null');
            }
            
            const response = await completeTask.execute(id);
            if (response.error) {
                next(response.error);
            }
            
            res.json(response);
        } catch (ex) {
            next(ex);
        }
    };

    return {
        getTasks,
        completeTask
    };
}