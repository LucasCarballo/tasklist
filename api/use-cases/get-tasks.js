module.exports = (tasksProvider, taskRepository) => {
    const execute = async (quantity = 3) => {
        let existentTasks = await taskRepository.getTasks(quantity);

        if (existentTasks.length < quantity) {
            const tasksToGet = quantity - existentTasks.length;
            const newTasks = await tasksProvider.get(tasksToGet);
    
            if (!newTasks) {
                return {
                    error: 'tasksProvider failed'
                }
            }

            const addedTasks = await taskRepository.addTasks(newTasks);
            existentTasks = [...existentTasks, ...addedTasks];
        }

        return existentTasks;
    }

    return {
        execute
    }
}