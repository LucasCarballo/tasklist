const TasksProvider = require("../../contracts/tasks-provider");
const axios = require('axios')

module.exports = class LoremFaker extends TasksProvider {
    async get(quantity) {
        const response = await axios.get(`https://lorem-faker.vercel.app/api?quantity=${quantity}`)

        if (response.status !== 200) {
            throw new Error('LoremFaker has an unexpected error')
        }

        return response.data
    }
}