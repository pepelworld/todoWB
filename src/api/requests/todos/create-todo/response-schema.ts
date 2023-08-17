import Joi from 'joi';

export const responseSchema = Joi.object({
  title: Joi.string().required(),
  isCompleted: Joi.bool().required(),
  id: Joi.number().required(),
  createdDate: Joi.string().required(),
  description: Joi.string().required(),
});
