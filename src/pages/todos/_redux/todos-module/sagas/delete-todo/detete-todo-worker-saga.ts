import { call, put } from 'redux-saga/effects';
import { setModalAction } from '@wildberries/notifications';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { deleteTodoRequest } from '@/api/requests/todos/delete-todo';
import { fetchTodosConfig } from '@/pages/todos/_utils/get-fetch-todos-config';
import { TodoIdType } from '@/pages/todos/_redux/todos-module/_types';
import { TODO_LIST_PAGE_TRANSLATES } from '@/pages/todos/page/_constants/translations';
import { startLoadingTodosAction, stopLoadingTodosAction } from '../../actions';

export function* deleteTodoWorkerSaga(todoId: TodoIdType) {
  try {
    yield put(startLoadingTodosAction());

    const { error, errorText } = yield call(deleteTodoRequest, todoId);
    if (error) {
      throw new Error(errorText);
    }

    yield put(
      initLoadManagerActionSaga({
        requestConfigList: [fetchTodosConfig],
      }),
    );

    yield put(
      setModalAction({
        status: 'success',
        title: 'Удалено',
        text: i18next.t(TODO_LIST_PAGE_TRANSLATES.deleteTodoSucces),
        customHoldTimeout: 2500,
      }),
    );
  } catch (error) {
    console.error('Error in deleteTodoSagaWorker', error.message);

    yield put(
      setModalAction({
        status: 'error',
        title: i18next.t(TODO_LIST_PAGE_TRANSLATES.deleteTodoError),
        text: error.message,
      }),
    );
  } finally {
    yield put(stopLoadingTodosAction());
  }
}
