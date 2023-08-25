import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { createTodoRequest } from '@/api/requests/todos/create-todo';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
} from '@/pages/todos/_redux/todos-module';
import { CreatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { TodoType } from '@/api/requests/todos/_types';
import { TODO_PAGE_TRANSLATES } from '@/pages/todos/page/_constants/translations';
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
  formRequest: createTodoRequest,
  textMessageSuccess: i18next.t(TODO_PAGE_TRANSLATES.createTodoSucces),
  titleMessageError: i18next.t(TODO_PAGE_TRANSLATES.createTodoError),
  callBackOnSuccess: ({ dispatch }) => {
    successCallback();
    dispatch(
      initLoadManagerActionSaga({
        requestConfigList: [fetchTodosConfig],
      }),
    );
  },
});
