const InMemoryDatabase = require('../drivers/db/in-memory-database')
const LoremFaker = require('../drivers/services/lorem-faker')

module.exports = (() => {
    return {
        databaseService: new InMemoryDatabase(),
        tasksProvider: new LoremFaker()
    }
})();