import { memo, useCallback, useState } from 'react';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
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

    const toggleEditing = () => {
      setIsEditing((prev) => !prev);
    };

    const candelEdit = useCallback(() => {
      setIsEditing(false);
    }, []);

    const handleSubmit = useCallback(
      (values: UpdatedTodoType) => {
        const updatedTodo = {
          id: todo.id,
          ...values,
        };
        onUpdate(getUpdateTodoConfig(updatedTodo));
        candelEdit();
      },
      [candelEdit, onUpdate, todo.id],
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
          onCancel={candelEdit}
          onSubmit={handleSubmit}
          title={todo.title}
        />
      );
    }

    return (
      <div key={todo.id}>
        {new Date(todo.createdDate).toLocaleDateString('ru-RU')} {todo.title}{' '}
        {todo.description} {todo.isCompleted ? 'Завершена' : 'Не завершена'}
        <button onClick={toggleEditing} type="button">
          Edit
        </button>{' '}
        <button onClick={handleDeleteClick} type="button">
          Delete
        </button>
      </div>
    );
  },
);
