import { IReduxBaseAction, IReduxAction } from '@mihanizm56/redux-core-modules';
import { TodoIdType, TodoType } from './_types';

const START_LOADING_TODOS = 'START_LOADING_TODOS';
export const startLoadingTodosAction: IReduxBaseAction<
  typeof START_LOADING_TODOS
> = () => ({
  type: START_LOADING_TODOS,
});
startLoadingTodosAction.type = START_LOADING_TODOS;

const STOP_LOADING_TODOS = 'STOP_LOADING_TODOS';
export const stopLoadingTodosAction: IReduxBaseAction<
  typeof STOP_LOADING_TODOS
> = () => ({
  type: STOP_LOADING_TODOS,
});
stopLoadingTodosAction.type = STOP_LOADING_TODOS;

const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const setTodosAction: IReduxAction<
  Array<TodoType>,
  typeof FETCH_TODO_SUCCESS
> = (payload) => ({
  type: FETCH_TODO_SUCCESS,
  payload,
});
setTodosAction.type = FETCH_TODO_SUCCESS;

const DELETE_TODO = 'DELETE_TODO';
export const deleteTodoActionSaga: IReduxAction<
  TodoIdType,
  typeof DELETE_TODO
> = (payload) => ({
  type: DELETE_TODO,
  payload,
});
deleteTodoActionSaga.type = DELETE_TODO;
