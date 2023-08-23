import { memo } from 'react';
import { Form, Field } from 'react-final-form';
import { ButtonLink, FormSimpleInput, Text } from '@wildberries/ui-kit';
import { FormApi } from 'final-form';
import { CreatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { TODO_FORM_VALIDATIONS } from '@/pages/todos/page/_constants/validate';
import { TodoType } from '@/api/requests/todos/_types';

type PropsType = {
  onSubmit: (
    values: CreatedTodoType,
    form: FormApi<CreatedTodoType, TodoType>,
  ) => void;
  isLoading: boolean;
};

export const CreateTodoFormView = memo(({ onSubmit, isLoading }: PropsType) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, invalid }) => {
        const isSubmitDisabled = submitting || pristine || isLoading || invalid;

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
            <ButtonLink
              disabled={isSubmitDisabled}
              text="Создать"
              type="submit"
            />
          </form>
        );
      }}
    />
  );
});
