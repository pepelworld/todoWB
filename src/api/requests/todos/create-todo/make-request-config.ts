import { IRequestParams } from '@mihanizm56/fetch-api';
import { createTodoEndpoint } from '@/api/endpoints/todos/create-todo';
import { TodoType } from '@/api/requests/todos/_types';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export type CreatedTodoType = Pick<TodoType, 'title' | 'description'>;

export const makeRequestConfig = (
  createdTodo: CreatedTodoType,
): IRequestParams => ({
  body: createdTodo,
  endpoint: createTodoEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
