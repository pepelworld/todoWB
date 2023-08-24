import i18next from 'i18next';
import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { fetchTodosRequest } from '@/api/requests/todos/fetch-todo';
import { TODO_PAGE_TRANSLATES } from '@/pages/todos/page/_constants/translations';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  setTodosAction,
} from '../_redux/todos-module';

export const fetchTodosConfig: InitLoadManagerRequestOptionsType = {
  request: fetchTodosRequest,
  loadingStartAction: startLoadingTodosAction,
  loadingStopAction: stopLoadingTodosAction,
  // requestExtraDataHandlerOptions: [
  //   {
  //     fieldName: 'todos',
  //     action: setTodosAction,
  //   },
  // ],
  actionSuccess: (data) => setTodosAction(data.todos),
  showErrorNotification: true,
  titleMessageError: i18next.t(TODO_PAGE_TRANSLATES.fetchTodoError),
};
