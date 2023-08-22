import { memo } from 'react';
import { ConnectedCreateTodoForm } from './_components/connected-create-todo-form';
import { ConnectedTodoList } from './_components/connected-todo-list';

const BLOCK_NAME = 'TodoPage';

export const TodoPage = memo(() => {
  return (
    <div data-page={BLOCK_NAME}>
      <ConnectedCreateTodoForm />

      <ConnectedTodoList />
    </div>
  );
});
