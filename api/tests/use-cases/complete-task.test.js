const TaskRepository = require('../../contracts/task-repository');
const completeTaskUseCase = require('../../use-cases/complete-task');

jest.mock('../../contracts/task-repository');

describe('complete-task', () => {
    it('when task is inexistent returns error', async () => {
        TaskRepository.mockImplementation(() => {
            return {
                getTask: (id) => {
                    return undefined;
                }
            }
        })
        const taskRepository = new TaskRepository();
        
        const completeTask = completeTaskUseCase(taskRepository);
        const response = await completeTask.execute();

        expect(response.error).toBe('task not found');
    })

    it('when task exist returns status as complete', async () => {
        TaskRepository.mockImplementation(() => {
            return {
                getTask: (id) => {
                    return {
                        id: 'someId',
                        title: 'random title'
                    };
                },
                setAsDone: (id) => {
                    return {
                        id: 'someId',
                        title: 'random title',
                        status: 'complete'
                    };
                }
            }
        })
        const taskRepository = new TaskRepository();
        
        const completeTask = completeTaskUseCase(taskRepository);
        const response = await completeTask.execute('someId');

        expect(response.status).toBe('complete');
    })    
})