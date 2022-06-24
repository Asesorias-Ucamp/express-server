import express from 'express'
import router from './routes/routes.js'
// import {dirname} from 'path'

const PORT = 3000 

const app = express()
app.use(router)

console.log(`Èl servidor esta corriendo en el puerto ${PORT}`)

app.listen(PORT)