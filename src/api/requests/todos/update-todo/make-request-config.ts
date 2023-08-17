import { IRequestParams } from '@mihanizm56/fetch-api';
import { updateTodoEndpoint } from '@/api/endpoints/todos/update-todo';
import { TodoType } from '@/api/requests/todos/_types';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export type UpdatedTodoType = Pick<
  TodoType,
  'title' | 'description' | 'isCompleted'
>;
export const makeRequestConfig = (
  updatedData: UpdatedTodoType,
): IRequestParams => ({
  body: updatedData,
  endpoint: updateTodoEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
