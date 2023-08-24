import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
} from '@/pages/todos/_redux/todos-module';
import { UpdatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { updateTodoRequest } from '@/api/requests/todos/update-todo';
import { TODO_LIST_PAGE_TRANSLATES } from '@/pages/todos/page/_constants/translations';
import { fetchTodosConfig } from './get-fetch-todos-config';

export const getUpdateTodoConfig = (
  updatedData: UpdatedTodoType,
): FormManagerType => {
  return {
    formValues: updatedData,
    loadingStartAction: startLoadingTodosAction,
    loadingStopAction: stopLoadingTodosAction,
    showNotification: true,
    formRequest: ({ body }) => updateTodoRequest(body),
    textMessageSuccess: i18next.t(TODO_LIST_PAGE_TRANSLATES.updateTodoSucces),
    titleMessageError: i18next.t(TODO_LIST_PAGE_TRANSLATES.updateTodoError),
    formSuccessAction: () =>
      initLoadManagerActionSaga({
        requestConfigList: [fetchTodosConfig],
      }),
  };
};
