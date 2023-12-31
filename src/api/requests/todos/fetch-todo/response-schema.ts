import Joi from 'joi';

export const responseSchema = Joi.object({
  todos: Joi.array()
    .items(
      Joi.object({
        id: Joi.number().required(),
        title: Joi.string().required(),
        isCompleted: Joi.boolean().required(),
        createdDate: Joi.string().required(),
        description: Joi.string().required(),
      }),
    )
    .required(),
});
