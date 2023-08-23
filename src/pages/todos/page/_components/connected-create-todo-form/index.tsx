import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { connect } from 'react-redux';
import { FormApi } from 'final-form';
import { memo } from 'react';
import { isTodosLoadingSelector } from '@/pages/todos/_redux/todos-module';
import {
  CreatedTodoType,
  TodosStorePartType,
} from '@/pages/todos/_redux/todos-module/_types';
import { getCreateTodoConfig } from '@/pages/todos/_utils/get-create-todo-config';
import { TodoType } from '@/api/requests/todos/_types';
import { CreateTodoFormView } from './_components/create-todo-form-view';

type MapStateOutputType = {
  isTodosLoading: ReturnType<typeof isTodosLoadingSelector>;
};

type MapDispatchType = {
  fetchFormManager: typeof fetchFormManagerSagaAction;
};

type PropsType = MapStateOutputType & MapDispatchType;

const WrapperComponent = memo((props: PropsType) => {
  const handleSubmit = (
    values: CreatedTodoType,
    form: FormApi<CreatedTodoType, TodoType>,
  ) => {
    const successCallback = form.reset;
    props.fetchFormManager(
      getCreateTodoConfig({
        values,
        successCallback,
      }),
    );
  };

  return (
    <CreateTodoFormView
      isLoading={props.isTodosLoading}
      onSubmit={handleSubmit}
    />
  );
});

const mapStateToProps = (state: TodosStorePartType): MapStateOutputType => ({
  isTodosLoading: isTodosLoadingSelector(state),
});

const mapDispatchToProps: MapDispatchType = {
  fetchFormManager: fetchFormManagerSagaAction,
};

export const ConnectedCreateTodoForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrapperComponent);
