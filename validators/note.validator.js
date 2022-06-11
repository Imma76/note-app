import Joi from 'joi';

const validateNewNote = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required()
});

export default {
  validateNewNote
};
