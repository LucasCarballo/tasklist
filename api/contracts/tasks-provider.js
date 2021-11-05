module.exports = class TasksProvider {
    get(quantity) {
        return Promise.reject(new Error('not implemented'));
    }
}