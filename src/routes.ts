import { Request, Response } from 'express'

import  CreateCourseService  from './CreateCourseService'

export function CreateCourse (request: Request, response: Response) {
    CreateCourseService.execute({
        name: "nodeJs",
        educator: "Dani",
        duration: 12
    })
    CreateCourseService.execute({
        name: "React Native",
        educator: "Rodrigo",
    })

    return response.send()
}