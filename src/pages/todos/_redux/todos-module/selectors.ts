import { createSelector } from 'reselect';
import { TODOS_REDUCER_NAME } from './_constants';
import {TodosStorePartType, TodosStoreType} from './_types';
import { initialTodosState } from './reducer';

export const todosStoreSelector = (store: TodosStorePartType): TodosStoreType =>
  store[TODOS_REDUCER_NAME] || initialTodosState;

export const todosSelector = createSelector(
  [todosStoreSelector],
  ({ todos }: TodosStoreType) => todos,
);

export const isTodosLoadingSelector = createSelector(
  todosStoreSelector,
  ({ isLoading }: TodosStoreType) => isLoading,
);
