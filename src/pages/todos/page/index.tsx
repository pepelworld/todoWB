import { lazy, memo, Suspense } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const ConnectedCreateTodoForm = lazy(() =>
  import('./_components/connected-create-todo-form').then((module) => ({
    default: module.ConnectedCreateTodoForm,
  })),
);
const ConnectedTodoList = lazy(() =>
  import('./_components/connected-todo-list').then((module) => ({
    default: module.ConnectedTodoList,
  })),
);

const cn = classnames.bind(styles);

const BLOCK_NAME = 'TodoPage';

export const TodoPage = memo(() => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <Suspense fallback={<></>}>
        <ConnectedCreateTodoForm />
      </Suspense>

      <div className={cn(`${BLOCK_NAME}__devider`)} />
      <Suspense fallback={<></>}>
        <ConnectedTodoList />
      </Suspense>
    </div>
  );
});
