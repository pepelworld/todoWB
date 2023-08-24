import { composeValidators, SimpleValidator } from '@mihanizm56/validators';
import i18next from 'i18next';
import { TODO_LIST_PAGE_TRANSLATES } from './translations';

const simpleValidator = new SimpleValidator();

export const TODO_FORM_VALIDATIONS = {
  title: composeValidators([
    simpleValidator.requiredValidator(
      i18next.t(TODO_LIST_PAGE_TRANSLATES.titleRequired),
    ),
  ]),
  description: composeValidators([
    simpleValidator.requiredValidator(
      i18next.t(TODO_LIST_PAGE_TRANSLATES.descriptionRequired),
    ),
  ]),
};
