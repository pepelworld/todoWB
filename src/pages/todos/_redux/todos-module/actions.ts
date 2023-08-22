import { IReduxBaseAction, IReduxAction } from '@mihanizm56/redux-core-modules';
import { TodoType } from './_types';

const START_LOADING_TODOS_ACTION = 'START_LOADING_TODOS_ACTION';
export const startLoadingTodosAction: IReduxBaseAction<
  typeof START_LOADING_TODOS_ACTION
> = () => ({
  type: START_LOADING_TODOS_ACTION,
});
startLoadingTodosAction.type = START_LOADING_TODOS_ACTION;

const STOP_LOADING_TODOS_ACTION = 'STOP_LOADING_TODOS_ACTION';
export const stopLoadingTodosAction: IReduxBaseAction<
  typeof STOP_LOADING_TODOS_ACTION
> = () => ({
  type: STOP_LOADING_TODOS_ACTION,
});
stopLoadingTodosAction.type = STOP_LOADING_TODOS_ACTION;

const FETCH_TODO_SUCCESS_ACTION = 'FETCH_TODO_SUCCESS_ACTION';
export const fetchTodoSuccessAction: IReduxAction<
  Array<TodoType>,
  typeof FETCH_TODO_SUCCESS_ACTION
> = (payload) => ({
  type: FETCH_TODO_SUCCESS_ACTION,
  payload,
});
fetchTodoSuccessAction.type = FETCH_TODO_SUCCESS_ACTION;

const DELETE_TODO_ACTION_SAGA = 'DELETE_TODO_ACTION_SAGA';
export const deleteTodoActionSaga: IReduxAction<
  { id: number },
  typeof DELETE_TODO_ACTION_SAGA
> = (payload) => ({
  type: DELETE_TODO_ACTION_SAGA,
  payload,
});
deleteTodoActionSaga.type = DELETE_TODO_ACTION_SAGA;
