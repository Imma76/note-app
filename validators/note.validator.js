import Joi from 'joi';

class NoteValidator {
  validateNewNoteSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required()
  });

  updateNoteSchema = Joi.object({
    id: Joi.string().required(),
    content: Joi.string(),
    title: Joi.string()

  });
}
export default new NoteValidator();
