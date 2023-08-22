import { Component, RefObject, createRef } from 'react';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { connect } from 'react-redux';
import { FormApi } from 'final-form';
import { isTodosLoadingSelector } from '@/pages/todos/_redux/todos-module';
import {
  CreatedTodoType,
  TodosStoreType,
} from '@/pages/todos/_redux/todos-module/_types';
import { getCreateTodoConfig } from '@/pages/todos/_utils/get-create-todo-config';
import { CreateTodoFormView } from './_components/create-todo-form-view';

type PropsType = {
  isTodosLoading: ReturnType<typeof isTodosLoadingSelector>;
  createTodo: typeof fetchFormManagerSagaAction;
};

export class WrapperComponent extends Component<PropsType> {
  formApiRef: RefObject<FormApi<CreatedTodoType>> = createRef();

  handleSubmit = (values: CreatedTodoType) => {
    this.props.createTodo(
      getCreateTodoConfig({
        formApi: this.formApiRef.current,
        values,
      }),
    );
  };

  render() {
    const { isTodosLoading } = this.props;

    return (
      <CreateTodoFormView
        formApiRef={this.formApiRef}
        isLoading={isTodosLoading}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state: TodosStoreType) => ({
  isTodosLoading: isTodosLoadingSelector(state),
});

const mapDispatchToProps = {
  createTodo: fetchFormManagerSagaAction,
};

export const ConnectedCreateTodoForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrapperComponent);
