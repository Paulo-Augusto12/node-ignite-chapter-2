import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const categoriesRoutes = Router()

const categories = [];

categoriesRoutes.post("/categories", (request, response) => {

    const { name, description } = request.body
    const categorieId = uuidv4()
    categories.push({
        categorieId,
        name, 
        description,
        created_at: new Date(),
    })

    return response.status(201).send()
})

categoriesRoutes.get("/categories", (request, response) => {

    return response.send(categories)
})

export { categoriesRoutes }