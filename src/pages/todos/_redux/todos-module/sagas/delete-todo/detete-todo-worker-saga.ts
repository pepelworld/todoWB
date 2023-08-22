import { call, put } from 'redux-saga/effects';
import { setModalAction } from '@wildberries/notifications';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { deleteTodoRequest } from '@/api/requests/todos/delete-todo';
import { getFetchTodosConfig } from '@/pages/todos/_utils/get-fetch-todos-config';
import { startLoadingTodosAction, stopLoadingTodosAction } from '../../actions';

export function* deleteTodoWorkerSaga(action) {
  try {
    const todoId = action.payload.id;
    yield put(startLoadingTodosAction());

    const { error, errorText } = yield call(deleteTodoRequest, todoId);
    if (error) {
      throw new Error(errorText);
    }

    yield put(
      initLoadManagerActionSaga({
        requestConfigList: [getFetchTodosConfig()],
      }),
    );

    yield put(
      setModalAction({
        status: 'success',
        title: 'Удалено',
        text: 'Задача успешно удалена',
        customHoldTimeout: 2500,
      }),
    );
  } catch (error) {
    console.error('Error in deleteTodoSagaWorker', error.message);

    yield put(
      setModalAction({
        status: 'error',
        title: 'Не получось удалить задачу',
        text: error.message,
      }),
    );
  } finally {
    yield put(stopLoadingTodosAction());
  }
}
