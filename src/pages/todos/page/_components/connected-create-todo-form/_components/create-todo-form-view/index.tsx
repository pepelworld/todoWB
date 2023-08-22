import { memo, MutableRefObject } from 'react';
import { Form, Field } from 'react-final-form';
import { FormSimpleInput, Text } from '@wildberries/ui-kit';
import { FormApi } from 'final-form';
import { CreatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { TODO_FORM_VALIDATIONS } from '@/pages/todos/page/_constants/validate';

type PropsType = {
  onSubmit: (values: CreatedTodoType) => void;
  formApiRef: MutableRefObject<FormApi<CreatedTodoType>>;
  isLoading: boolean;
};

export const CreateTodoFormView = memo(
  ({ onSubmit, formApiRef, isLoading }: PropsType) => {
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, invalid }) => {
          const isSubmitDisabled =
            submitting || pristine || isLoading || invalid;

          // eslint-disable-next-line no-param-reassign
          formApiRef.current = form;

          return (
            <form onSubmit={handleSubmit}>
              <Text size="h3-bold" text="Создать новую задачу" />
              <Field
                autoComplete="off"
                component={FormSimpleInput}
                id="todo-title"
                label="Заголовок"
                name="title"
                placeholder="Впишите заголовок"
                required
                type="text"
                validate={TODO_FORM_VALIDATIONS.title}
              />
              <Field
                autoComplete="off"
                component={FormSimpleInput}
                id="todo-description"
                label="Название"
                name="description"
                placeholder="Впишите название"
                required
                type="text"
                validate={TODO_FORM_VALIDATIONS.description}
              />
              <button disabled={isSubmitDisabled} type="submit">
                Создать
              </button>
            </form>
          );
        }}
      />
    );
  },
);
