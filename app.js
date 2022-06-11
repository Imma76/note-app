import 'express-async-errors'
import express from 'express'
import middleware from './middlewares/middleware.js'
const app = express()

middleware(app)


app.listen(5011, () => {
    console.log('port listening on port 5011')
})