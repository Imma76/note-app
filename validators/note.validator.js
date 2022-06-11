import Joi from 'joi';

class NoteValidator {
  validateNewNoteSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required()
  });
}
export default new NoteValidator();
