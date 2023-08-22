import {
  composeValidators,
  SimpleValidator,
  ValidatorReturnsType,
} from '@mihanizm56/validators';
import { TodoType } from '../../_redux/todos-module/_types';

const simpleValidator = new SimpleValidator();

export type formValidationsType = Partial<
  Record<keyof TodoType, ValidatorReturnsType>
>;

export const TODO_FORM_VALIDATIONS = {
  title: composeValidators([
    simpleValidator.requiredValidator('Требуется заголовок задачи'),
  ]),
  description: composeValidators([
    simpleValidator.requiredValidator('Требуется описание задачи'),
  ]),
};
