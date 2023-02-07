import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const categoriesRoutes = Router()

const categories = [];

categoriesRoutes.post("/", (request, response) => {

    const { name, description } = request.body

    const category = {
        categoryId: uuidv4(),
        name, 
        description,
        created_at: new Date(),
    }
    categories.push(category)

    return response.status(201).send()
})

categoriesRoutes.get("/", (request, response) => {

    return response.send(categories)
})

export { categoriesRoutes }