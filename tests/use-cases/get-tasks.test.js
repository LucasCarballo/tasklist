const TaskRepository = require('../../contracts/task-repository');
const TasksProvider = require('../../contracts/tasks-provider');
const getTasksUseCase = require('../../use-cases/get-tasks');

jest.mock('../../contracts/task-repository');
jest.mock('../../contracts/tasks-provider');

describe('get-tasks', () => {
    it ('when existent tasks are greater or equal than quantity requested will not call tasksProvider', async () => {
        TaskRepository.mockImplementation(() => {
            return {
                getTasks: (_quantity) => {
                    return [
                        {
                            id: 'someId',
                            title: 'random title'
                        }
                    ]
                }
            }
        });
        const taskRepository = new TaskRepository();
        
        const tasksProvider = {
            get: jest.fn()
        }

        const getTasks = getTasksUseCase(tasksProvider, taskRepository);
        const response = await getTasks.execute(1);

        expect(response.length).toBe(1);
        expect(tasksProvider.get).not.toHaveBeenCalled();
    });

    it ('when quantity is greater than existent tasks get tasks from provider and returns all', async () => {
        TaskRepository.mockImplementation(() => {
            return {
                getTasks: (_quantity) => {
                    return [
                        {
                            id: 'someId',
                            title: 'random title'
                        }
                    ]
                },
                addTasks: (_tasks) => {
                    return [
                        {
                            id: 'id2',
                            title: 'other random title'
                        }
                    ]
                }

            }
        });
        const taskRepository = new TaskRepository();
        
        TasksProvider.mockImplementation(() => {
            return {
                get: (_quantity) => {
                    return [
                        {
                            title: 'other random title'
                        }
                    ]
                }
            }
        });
        const tasksProvider = new TasksProvider();

        const getTasks = getTasksUseCase(tasksProvider, taskRepository);
        const response = await getTasks.execute(2);

        expect(response.length).toBe(2);
        expect(response[0].id).toBe('someId');
        expect(response[1].id).toBe('id2');
    });
})