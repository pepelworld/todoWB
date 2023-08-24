import { composeValidators, SimpleValidator } from '@mihanizm56/validators';

const simpleValidator = new SimpleValidator();

export const TODO_FORM_VALIDATIONS = {
  title: composeValidators([
    simpleValidator.requiredValidator('Требуется заголовок задачи'),
  ]),
  description: composeValidators([
    simpleValidator.requiredValidator('Требуется описание задачи'),
  ]),
};
