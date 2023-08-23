import { TODOS_REDUCER_NAME } from '@/pages/todos/_redux/todos-module/_constants';

export type TodoType = {
  id: number;
  createdDate: Date;
  isCompleted: boolean;
  description: string;
  title: string;
};

export type CreatedTodoType = Pick<TodoType, 'description' | 'title'>;

export type UpdatedTodoType = Pick<
  TodoType,
  'description' | 'title' | 'isCompleted'
>;

export type TodoIdType = Pick<TodoType, 'id'>;

export type TodosStoreType = {
  todos: Array<TodoType>;
  isLoading: boolean;
};

export type TodosStorePartType = {
  [TODOS_REDUCER_NAME]: TodosStoreType;
};
