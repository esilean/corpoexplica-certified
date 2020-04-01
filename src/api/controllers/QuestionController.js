
const QuestionService = require('../services/QuestionService')

module.exports = {
    async index(request, response) {
        const questions = await QuestionService.findAll()

        return response.json(questions)
    },

    async store(request, response) {

        const question = await QuestionService.create(request.body)

        return response.json(question)
    },

    async update(request, response) {
        const { id } = request.params

        const question = await QuestionService.update(id, request.body)


        return response.json(question)

    },
    async destroy(request, response) {
        const { id } = request.params

        await QuestionService.destroy(id)

        return response.json()
    },
}