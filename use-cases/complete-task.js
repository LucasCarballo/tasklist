module.exports = (taskRepository) => {
    const execute = async (taskId) => {
        const task = taskRepository.getTask(taskId);
        if (!task) {
            return {
                error: 'task not found'
            }
        }
        
        return taskRepository.setAsDone(taskId);
    }

    return {
        execute
    }
}