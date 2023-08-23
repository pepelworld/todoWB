import { memo, useCallback, useMemo, useState } from 'react';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { ButtonLink } from '@wildberries/ui-kit';
import { deleteTodoActionSaga } from '@/pages/todos/_redux/todos-module';
import {
  UpdatedTodoType,
  TodoType,
} from '@/pages/todos/_redux/todos-module/_types';
import { getUpdateTodoConfig } from '@/pages/todos/_utils/get-update-todo-config';
import { TodoItemForm } from './_components/todo-item-form';

type PropsType = {
  todo: TodoType;
  onDelete: typeof deleteTodoActionSaga;
  onUpdate: typeof fetchFormManagerSagaAction;
  isTodosLoading: boolean;
};

export const TodoItem = memo(
  ({ todo, onDelete, onUpdate, isTodosLoading }: PropsType) => {
    const [isEditing, setIsEditing] = useState(false);

    const createdDate = new Date(todo.createdDate).toLocaleDateString('ru-RU');

    const isCompleted = useMemo(
      () => (todo.isCompleted ? 'Завершена' : 'Не завершена'),
      [todo.isCompleted],
    );

    const toggleEditing = () => {
      setIsEditing(!isEditing);
    };

    const cancelEdit = useCallback(() => {
      setIsEditing(false);
    }, []);

    const handleSubmit = useCallback(
      (values: UpdatedTodoType) => {
        const updatedTodo = {
          id: todo.id,
          ...values,
        };
        onUpdate(getUpdateTodoConfig(updatedTodo));
        cancelEdit();
      },
      [cancelEdit, onUpdate, todo.id],
    );

    const handleDeleteClick = () => {
      onDelete({ id: todo.id });
    };

    if (isEditing) {
      return (
        <TodoItemForm
          description={todo.description}
          isCompleted={todo.isCompleted}
          isLoading={isTodosLoading}
          onCancel={cancelEdit}
          onSubmit={handleSubmit}
          title={todo.title}
        />
      );
    }

    return (
      <div>
        {createdDate} {todo.title}
        {todo.description} {isCompleted}
        <ButtonLink onClick={toggleEditing} text="Edit" type="button" />
        <ButtonLink onClick={handleDeleteClick} text="Delete" type="button" />
      </div>
    );
  },
);
