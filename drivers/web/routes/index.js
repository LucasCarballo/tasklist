const express = require('express');
const tasks = require('./tasks');

const apiRouter = (dependencies) => {
    const routes = express.Router();

    const tasksRouter = tasks(dependencies);

    routes.use('/tasks', tasksRouter);
    return routes;
}

module.exports = apiRouter;