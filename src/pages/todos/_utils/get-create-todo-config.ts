import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import { createTodoRequest } from '@/api/requests/todos/create-todo';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
} from '@/pages/todos/_redux/todos-module';
import { CreatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { TodoType } from '@/api/requests/todos/_types';
import { fetchTodosConfig } from './get-fetch-todos-config';

type ParamsType = {
  values: CreatedTodoType;
  successCallback: (initialValues?: TodoType) => void;
};

export const getCreateTodoConfig = ({
  values,
  successCallback,
}: ParamsType): FormManagerType => ({
  formValues: values,
  loadingStartAction: startLoadingTodosAction,
  loadingStopAction: stopLoadingTodosAction,
  showNotification: true,
  formRequest: ({ body }) => createTodoRequest(body),
  textMessageSuccess: 'Задача успешно создана',
  formSuccessAction: () => {
    successCallback();

    return initLoadManagerActionSaga({
      requestConfigList: [fetchTodosConfig],
    });
  },
});
