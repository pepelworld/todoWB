import { IRequestParams } from '@mihanizm56/fetch-api';
import { deleteTodoEndpoint } from '@/api/endpoints/todos/delete-todo';
import { TodoType } from '@/api/requests/todos/_types';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export type DeletedTodoType = Pick<TodoType, 'id'>;

export const makeRequestConfig = (id: DeletedTodoType): IRequestParams => ({
  body: id,
  endpoint: deleteTodoEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
