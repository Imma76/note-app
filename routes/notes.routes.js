import express from 'express'

const noteRouter = express.Router()

noteRouter.get('/all_notes')

export default noteRouter