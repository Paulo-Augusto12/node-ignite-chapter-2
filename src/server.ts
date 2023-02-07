import express  from "express";

const app = express()

app.listen(3333, () => console.log('server is running'))

app.get('/', (request, response) => {
    response.json({message: 'hello world'})
})