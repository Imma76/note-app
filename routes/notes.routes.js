import express from 'express';
import noteController from '../controllers/note.controller.js';
import validator from '../validators/validator.js';
import noteValidator from '../validators/note.validator.js';
import authentication from '../middlewares/auth.middleware.js';

const noteRouter = express.Router();

noteRouter.get('/notes/:email', authentication, noteController.getAllNotes);

noteRouter.get('/notes', noteController.getAllNotes1);
noteRouter.post('/notes', [validator(noteValidator.validateNewNoteSchema), authentication], noteController.postNewNote);

noteRouter.put('/notes', [validator(noteValidator.updateNoteSchema), authentication], noteController.updateNote);
noteRouter.delete('/notes', [validator(noteValidator.deleteNoteSchema), authentication], noteController.deleteNote);
export default noteRouter;
