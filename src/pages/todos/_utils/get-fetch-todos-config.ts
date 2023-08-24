import i18next from 'i18next';
import { fetchTodosRequest } from '@/api/requests/todos/fetch-todo';
import { TODO_LIST_PAGE_TRANSLATES } from '@/pages/todos/page/_constants/translations';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  setTodosAction,
} from '../_redux/todos-module';

export const fetchTodosConfig = {
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
  titleMessageError: i18next.t(TODO_LIST_PAGE_TRANSLATES.fetchTodoError),
};
