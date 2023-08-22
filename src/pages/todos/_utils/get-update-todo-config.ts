import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
} from '@/pages/todos/_redux/todos-module';
import { UpdatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { updateTodoRequest } from '@/api/requests/todos/update-todo';
import { getFetchTodosConfig } from './get-fetch-todos-config';

export const getUpdateTodoConfig = (
  updatedData: UpdatedTodoType,
): FormManagerType => {
  return {
    formValues: updatedData,
    loadingStartAction: startLoadingTodosAction,
    loadingStopAction: stopLoadingTodosAction,
    showNotification: true,
    formRequest: ({ body }) => updateTodoRequest(body),
    textMessageSuccess: 'Задача успешно изменена',
    formSuccessAction: () =>
      initLoadManagerActionSaga({
        requestConfigList: [getFetchTodosConfig()],
      }),
  };
};
