import Joi from 'joi';

export const responseSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  isCompleted: Joi.bool().required(),
  createdDate: Joi.string().required(),
  description: Joi.string().required(),
});
