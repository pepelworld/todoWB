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
import { resetFinalFormFields } from '../page/_utils/form';
import { getFetchTodosConfig } from './get-fetch-todos-config';

type ParamsType = {
  values: CreatedTodoType;
};

export const getCreateTodoConfig = ({
  values,
}: ParamsType): FormManagerType => ({
  formValues: values,
  loadingStartAction: startLoadingTodosAction,
  loadingStopAction: stopLoadingTodosAction,
  showNotification: true,
  formRequest: ({ body }) => createTodoRequest(body),
  textMessageSuccess: 'Задача успешно создана',
  formSuccessAction: () => initLoadManagerActionSaga({
      requestConfigList: [getFetchTodosConfig],
    })
});
