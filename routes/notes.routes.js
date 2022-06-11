import express from 'express'
import noteController from '../controllers/note.controller.js'
const noteRouter = express.Router()

noteRouter.get('/all_notes')

export default noteRouter