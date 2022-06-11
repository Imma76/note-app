import 'express-async-errors'
import express from 'express'
import middleware from './middlewares/middleware.js'
const app = express()

middleware(app)

const PORT = process.env.PORT || 5011
app.listen(PORT, () => {
    console.log('port listening on port 5011')
})