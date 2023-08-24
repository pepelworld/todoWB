import { memo } from 'react';
import { Form, Field } from 'react-final-form';
import { ButtonLink, FormSimpleInput, Text } from '@wildberries/ui-kit';
import { FormApi } from 'final-form';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import { CreatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { TODO_FORM_VALIDATIONS } from '@/pages/todos/page/_constants/validate';
import { TodoType } from '@/api/requests/todos/_types';
import { TODO_LIST_PAGE_TRANSLATES } from '@/pages/todos/page/_constants/translations';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'CreateTodoFormView';

type PropsType = {
  onSubmit: (
    values: CreatedTodoType,
    form: FormApi<CreatedTodoType, TodoType>,
  ) => void;
  isLoading: boolean;
};

export const CreateTodoFormView = memo(({ onSubmit, isLoading }: PropsType) => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine, invalid }) => {
          const isSubmitDisabled =
            submitting || pristine || isLoading || invalid;

          return (
            <form className={cn(`${BLOCK_NAME}__form`)} onSubmit={handleSubmit}>
              <Text
                size="h3-bold"
                text={i18next.t(TODO_LIST_PAGE_TRANSLATES.createTodoTitle)}
              />
              <Field
                autoComplete="off"
                component={FormSimpleInput}
                id="todo-title"
                label={i18next.t(TODO_LIST_PAGE_TRANSLATES.title)}
                name="title"
                placeholder={i18next.t(TODO_LIST_PAGE_TRANSLATES.writeTitle)}
                required
                type="text"
                validate={TODO_FORM_VALIDATIONS.title}
              />
              <Field
                autoComplete="off"
                component={FormSimpleInput}
                id="todo-description"
                label={i18next.t(TODO_LIST_PAGE_TRANSLATES.description)}
                name="description"
                placeholder={i18next.t(
                  TODO_LIST_PAGE_TRANSLATES.writeDescription,
                )}
                required
                type="text"
                validate={TODO_FORM_VALIDATIONS.description}
              />
              <ButtonLink
                disabled={isSubmitDisabled}
                isLoading={isLoading}
                size="big"
                text={i18next.t(TODO_LIST_PAGE_TRANSLATES.createButton)}
                type="submit"
                variant="main"
              />
            </form>
          );
        }}
      />
    </div>
  );
});
