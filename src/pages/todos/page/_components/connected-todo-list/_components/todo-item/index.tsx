import React, { memo, useCallback, useMemo, useState } from 'react';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import {
  BasicCheckMarkIcon,
  BasicClearIcon,
  BasicPencilEditIcon,
  ButtonLink,
  Text,
} from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import { deleteTodoActionSaga } from '@/pages/todos/_redux/todos-module';
import {
  UpdatedTodoType,
  TodoType,
} from '@/pages/todos/_redux/todos-module/_types';
import { getUpdateTodoConfig } from '@/pages/todos/_utils/get-update-todo-config';
import { TODO_PAGE_TRANSLATES } from '@/pages/todos/page/_constants/translations';
import { TodoItemForm } from './_components/todo-item-form';
import styles from './index.module.scss';

type PropsType = {
  todo: TodoType;
  onDelete: typeof deleteTodoActionSaga;
  onUpdate: typeof fetchFormManagerSagaAction;
  isTodosLoading: boolean;
};

const cn = classnames.bind(styles);

const BLOCK_NAME = 'TodoItem';

export const TodoItem = memo(
  ({ todo, onDelete, onUpdate, isTodosLoading }: PropsType) => {
    const [isEditing, setIsEditing] = useState(false);

    const createdDate = useMemo(
      () => new Date(todo.createdDate).toLocaleDateString('ru-RU'),
      [todo.createdDate],
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

    const handleDeleteClick = useCallback(() => {
      onDelete({ id: todo.id });
    }, [todo.id, onDelete]);

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
      <div className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__title`)}>
          <Text isUpperCase size="h3-bold" text={todo.title} />
          <Text color="blue" text={createdDate} />
        </div>
        <Text
          text={i18next.t(TODO_PAGE_TRANSLATES.descriptionWithText, {
            text: todo.description,
          })}
        />
        {todo.isCompleted && (
          <div className={cn(`${BLOCK_NAME}__status`)}>
            <Text text={i18next.t(TODO_PAGE_TRANSLATES.doneStatus)} />
            <BasicCheckMarkIcon colorType="cyanColor" />
          </div>
        )}
        <div className={cn(`${BLOCK_NAME}__controls`)}>
          <ButtonLink
            onClick={toggleEditing}
            rightIcon={BasicPencilEditIcon}
            size="small"
            text={i18next.t(TODO_PAGE_TRANSLATES.updateButton)}
            type="submit"
            variant="only-icon"
          />
          <ButtonLink
            onClick={handleDeleteClick}
            rightIcon={BasicClearIcon}
            size="small"
            text={i18next.t(TODO_PAGE_TRANSLATES.cancelButton)}
            type="submit"
            variant="only-icon"
          />
        </div>
      </div>
    );
  },
);
