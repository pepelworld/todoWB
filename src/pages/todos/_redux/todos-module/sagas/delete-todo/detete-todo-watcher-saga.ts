import { takeEvery } from 'redux-saga/effects';
import { deleteTodoActionSaga } from '../../actions';
import { deleteTodoWorkerSaga } from './detete-todo-worker-saga';

export const DELETE_TODO_WATCHER_SAGA_NAME = 'DELETE_TODO_WATCHER_SAGA_NAME';

export function* deleteTodoWatcherSaga() {
  yield takeEvery(deleteTodoActionSaga.type, deleteTodoWorkerSaga);
}
