import express from 'express'


const app = express()


app.get('/', (request, response) => {
    return response.json({server_started: 'Servidor funcionando'})
})


app.listen(3333)