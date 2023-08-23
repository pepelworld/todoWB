import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { fetchTodosRequest } from '@/api/requests/todos/fetch-todo';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  fetchTodoSuccessAction,
} from '../_redux/todos-module';

export const getFetchTodosConfig = {
  request: fetchTodosRequest,
  loadingStartAction: startLoadingTodosAction,
  loadingStopAction: stopLoadingTodosAction,
  requestExtraDataHandlerOptions: [
    {
      fieldName: 'todos',
      action: fetchTodoSuccessAction,
    },
  ],
  showErrorNotification: true,
  titleMessageError: 'Не удалось получить список задач',
};
