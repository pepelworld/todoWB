import { TodosStoreType } from './_types';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  fetchTodoSuccessAction,
} from './actions';

type ActionsType =
  | ReturnType<typeof startLoadingTodosAction>
  | ReturnType<typeof stopLoadingTodosAction>
  | ReturnType<typeof fetchTodoSuccessAction>;

export const initialTodosState: TodosStoreType = {
  todos: [],
  isLoading: false,
};

const reducer = (
  state: TodosStoreType = initialTodosState,
  action: ActionsType,
) => {
  switch (action.type) {
    case fetchTodoSuccessAction.type:
      return { ...state, todos: action.payload };

    case startLoadingTodosAction.type:
      return { ...state, isLoading: true };

    case stopLoadingTodosAction.type:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default reducer;
