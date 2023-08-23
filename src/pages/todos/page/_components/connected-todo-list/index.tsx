import { connect } from 'react-redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { memo } from 'react';
import {
  deleteTodoActionSaga,
  isTodosLoadingSelector,
  todosSelector,
} from '@/pages/todos/_redux/todos-module';
import { TodosStorePartType } from '@/pages/todos/_redux/todos-module/_types';
import { TodoItem } from './_components/todo-item';

type MapStateOutputType = {
  isTodosLoading: ReturnType<typeof isTodosLoadingSelector>;
  todos: ReturnType<typeof todosSelector>;
};

type MapDispatchType = {
  deleteTodo: typeof deleteTodoActionSaga;
  fetchFormManager: typeof fetchFormManagerSagaAction;
};

type PropsType = MapStateOutputType & MapDispatchType;

const WrapperComponent = memo((props: PropsType) => {
  const { todos, isTodosLoading, deleteTodo, fetchFormManager } = props;

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          isTodosLoading={isTodosLoading}
          onDelete={deleteTodo}
          onUpdate={fetchFormManager}
          todo={todo}
        />
      ))}
    </>
  );
});

const mapStateToProps = (state: TodosStorePartType): MapStateOutputType => ({
  todos: todosSelector(state),
  isTodosLoading: isTodosLoadingSelector(state),
});

const mapDispatchToProps: MapDispatchType = {
  deleteTodo: deleteTodoActionSaga,
  fetchFormManager: fetchFormManagerSagaAction,
};

export const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrapperComponent);
