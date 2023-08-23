import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import { FormApi } from 'final-form';
import { createTodoRequest } from '@/api/requests/todos/create-todo';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
} from '@/pages/todos/_redux/todos-module';
import { CreatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { TodoType } from '@/api/requests/todos/_types';
import { getFetchTodosConfig } from './get-fetch-todos-config';

type ParamsType = {
  values: CreatedTodoType;
  form: FormApi<CreatedTodoType, TodoType>;
};

export const getCreateTodoConfig = ({
  values,
  form,
}: ParamsType): FormManagerType => ({
  formValues: values,
  loadingStartAction: startLoadingTodosAction,
  loadingStopAction: stopLoadingTodosAction,
  showNotification: true,
  formRequest: ({ body }) => createTodoRequest(body),
  textMessageSuccess: 'Задача успешно создана',
  formSuccessAction: () => {
    form.reset();

    return initLoadManagerActionSaga({
      requestConfigList: [getFetchTodosConfig],
    });
  },
});
