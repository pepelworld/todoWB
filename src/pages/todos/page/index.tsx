import { memo } from 'react';
import { ConnectedCreateTodoForm } from './_components/connected-create-todo-form';
import { ConnectedTodoList } from './_components/connected-todo-list';
import classnames from "classnames/bind";
import styles from "@/pages/home/page/_components/header/index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = 'TodoPage';

export const TodoPage = memo(() => {
  return (
    <div data-page={cn(BLOCK_NAME)}>
      <ConnectedCreateTodoForm />

      <ConnectedTodoList />
    </div>
  );
});
