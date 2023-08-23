import { Component, RefObject, createRef } from 'react';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { connect } from 'react-redux';
import { FormApi } from 'final-form';
import { isTodosLoadingSelector } from '@/pages/todos/_redux/todos-module';
import {
  CreatedTodoType, TodosStorePartType,
  TodosStoreType,
} from '@/pages/todos/_redux/todos-module/_types';
import { getCreateTodoConfig } from '@/pages/todos/_utils/get-create-todo-config';
import { CreateTodoFormView } from './_components/create-todo-form-view';
import {TodoType} from "@/api/requests/todos/_types";

type MapStateOutputType = {
  isTodosLoading: ReturnType<typeof isTodosLoadingSelector>;
}

type MapDispatchType = {
  fetchFormManager: typeof fetchFormManagerSagaAction;
}

type PropsType = MapStateOutputType & MapDispatchType;



const WrapperComponent = (props: PropsType) => {
  const handleSubmit = (values: CreatedTodoType, form: FormApi<CreatedTodoType, TodoType>) => {
    form.reset()
    props.fetchFormManager(
      getCreateTodoConfig({
        values,
      }),
    );
  };

    return (
      <CreateTodoFormView
        isLoading={props.isTodosLoading}
        onSubmit={handleSubmit}
      />
    );
}

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
