import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import {
  deleteTodoActionSaga,
  isTodosLoadingSelector,
  todosSelector,
} from '@/pages/todos/_redux/todos-module';
import { TodosStoreType } from '@/pages/todos/_redux/todos-module/_types';
import { TodoItem } from './_components/todo-item';

type PropsType = {
  todos: ReturnType<typeof todosSelector>;
  isTodosLoading: ReturnType<typeof isTodosLoadingSelector>;
  deleteTodo: typeof deleteTodoActionSaga;
  updateTodo: typeof fetchFormManagerSagaAction;
};

export class WrapperComponent extends PureComponent<PropsType> {
  render() {
    const { todos, isTodosLoading, deleteTodo, updateTodo } = this.props;

    return (
      <>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            isTodosLoading={isTodosLoading}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
            todo={todo}
          />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state: TodosStoreType) => ({
  todos: todosSelector(state),
  isTodosLoading: isTodosLoadingSelector(state),
});

const mapDispatchToProps = {
  deleteTodo: deleteTodoActionSaga,
  updateTodo: fetchFormManagerSagaAction,
};

export const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrapperComponent);
