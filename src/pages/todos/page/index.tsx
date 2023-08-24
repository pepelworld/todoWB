import { memo } from 'react';
import classnames from 'classnames/bind';
import { ConnectedCreateTodoForm } from './_components/connected-create-todo-form';
import { ConnectedTodoList } from './_components/connected-todo-list';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'TodoPage';

export const TodoPage = memo(() => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <ConnectedCreateTodoForm />

      <ConnectedTodoList />
    </div>
  );
});
