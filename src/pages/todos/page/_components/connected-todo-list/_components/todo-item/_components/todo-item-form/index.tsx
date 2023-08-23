import { memo } from 'react';
import { Form, Field } from 'react-final-form';
import { ButtonLink, FormCheckbox, FormSimpleInput } from '@wildberries/ui-kit';
import { UpdatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { TODO_FORM_VALIDATIONS } from '@/pages/todos/page/_constants/validate';

type PropsType = {
  onSubmit: (values: UpdatedTodoType) => void;
  onCancel: () => void;
  isLoading: boolean;
  description: string;
  isCompleted: boolean;
  title: string;
};

export const TodoItemForm = memo(
  ({
    onSubmit,
    onCancel,
    isLoading,
    description,
    title,
    isCompleted,
  }: PropsType) => {
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine, invalid }) => {
          const isSubmitDisabled =
            submitting || pristine || isLoading || invalid;

          return (
            <form onSubmit={handleSubmit}>
              <Field
                autoComplete="off"
                component={FormSimpleInput}
                id="todo-title"
                initialValue={title}
                label="Изменить заголовок"
                name="title"
                placeholder="Новый заголовок задачи"
                required
                type="text"
                validate={TODO_FORM_VALIDATIONS.title}
              />
              <Field
                autoComplete="off"
                component={FormSimpleInput}
                id="todo-description"
                initialValue={description}
                label="Изменить задачу"
                name="description"
                placeholder="Новое название задачи"
                required
                type="text"
                validate={TODO_FORM_VALIDATIONS.description}
              />
              <Field
                autoComplete="off"
                component={FormCheckbox}
                disable={false}
                id="todo-done"
                initialValue={isCompleted}
                label="Задача выполнена"
                name="isCompleted"
                type="checkbox"
              />
              <ButtonLink
                disabled={isSubmitDisabled}
                text="Изменить"
                type="submit"
              />
              <ButtonLink onClick={onCancel} text="Отмена" type="button" />
            </form>
          );
        }}
      />
    );
  },
);
