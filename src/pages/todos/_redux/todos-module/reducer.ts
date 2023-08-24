import { TodosStoreType } from './_types';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  setTodosAction,
} from './actions';

type ActionsType =
  | ReturnType<typeof startLoadingTodosAction>
  | ReturnType<typeof stopLoadingTodosAction>
  | ReturnType<typeof setTodosAction>;

export const initialTodosState: TodosStoreType = {
  todos: [],
  isLoading: false,
};

const reducer = (
  state: TodosStoreType = initialTodosState,
  action: ActionsType,
): TodosStoreType => {
  switch (action.type) {
    case setTodosAction.type:
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
