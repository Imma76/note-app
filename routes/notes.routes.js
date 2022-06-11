import express from 'express';
import noteController from '../controllers/note.controller.js';
import validator from '../validators/validator.js';
import noteValidator from '../validators/note.validator.js';

const noteRouter = express.Router();

noteRouter.get('/all_notes', noteController.getAllNotes);

noteRouter.post('/new_note',  noteController.postNewNote);
export default noteRouter;
