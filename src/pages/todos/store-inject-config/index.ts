import { StoreInjectConfig } from '@mihanizm56/redux-core-modules/dist/containers/redux-store-loader/types';
import reducerUI, {
  MODULE_REDUCER_NAME as reducerUIName,
} from '@/_redux/ui-module';
import todosReducer from '../_redux/todos-module/reducer';
import { TODOS_REDUCER_NAME } from '../_redux/todos-module';
import {
  DELETE_TODO_WATCHER_SAGA_NAME,
  deleteTodoWatcherSaga,
} from '../_redux/todos-module/sagas/delete-todo';
import { getFetchTodosConfig } from '../_utils/get-fetch-todos-config';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: reducerUIName,
      reducer: reducerUI,
    },
    {
      name: TODOS_REDUCER_NAME,
      reducer: todosReducer,
    },
  ],
  sagasToInject: [
    {
      name: DELETE_TODO_WATCHER_SAGA_NAME,
      saga: deleteTodoWatcherSaga,
    },
  ],

  initialLoadManagerConfig: {
    requestConfigList: [getFetchTodosConfig()],
  },
};
