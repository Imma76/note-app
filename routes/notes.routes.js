import express from 'express';
import noteController from '../controllers/note.controller.js';
import validator from '../validators/validator.js';
import noteValidator from '../validators/note.validator.js';
import authentication from '../middlewares/auth.middleware.js';

const noteRouter = express.Router();

noteRouter.get('/notes', [authentication], noteController.getAllNotes);

noteRouter.post('/notes', [validator(noteValidator.validateNewNoteSchema)], noteController.postNewNote);

noteRouter.put('/notes', [validator(noteValidator.updateNoteSchema)], noteController.updateNote);
noteRouter.delete('/notes', [validator(noteValidator.deleteNoteSchema)], noteController.deleteNote);
export default noteRouter;
