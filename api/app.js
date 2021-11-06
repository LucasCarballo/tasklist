const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./drivers/web/routes');
const projectDependencies = require('./config/dependencies');
const errorHandler = require('./drivers/common/error-handler');

const app = express();
const port = process.env.PORT || 3000;

try {
    projectDependencies.databaseService.initDatabase();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/', routes(projectDependencies));

    app.use(errorHandler);

    app.listen(port, () => console.log(`http://localhost:${port}`));
} catch (err) {
    console.log(`db is not ready, err: ${err}`);
}