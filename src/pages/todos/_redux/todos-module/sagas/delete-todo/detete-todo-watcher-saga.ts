import { fork, take } from 'redux-saga/effects';
import { deleteTodoActionSaga } from '../../actions';
import { deleteTodoWorkerSaga } from './detete-todo-worker-saga';

export const DELETE_TODO_WATCHER_SAGA_NAME = 'DELETE_TODO_WATCHER_SAGA_NAME';

export function* deleteTodoWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof deleteTodoActionSaga> = yield take(
      deleteTodoActionSaga.type,
    );

    yield fork(deleteTodoWorkerSaga, payload);
  }
}
