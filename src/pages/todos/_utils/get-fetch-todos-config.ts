import { fetchTodosRequest } from '@/api/requests/todos/fetch-todo';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  setTodosAction,
} from '../_redux/todos-module';

export const getFetchTodosConfig = {
  request: fetchTodosRequest,
  loadingStartAction: startLoadingTodosAction,
  loadingStopAction: stopLoadingTodosAction,
  requestExtraDataHandlerOptions: [
    {
      fieldName: 'todos',
      action: setTodosAction,
    },
  ],
  showErrorNotification: true,
  titleMessageError: 'Не удалось получить список задач',
};
