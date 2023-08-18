import { IRequestParams } from '@mihanizm56/fetch-api';
import { fetchTodosEndpoint } from '@/api/endpoints/todos/fetch-todo';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (): IRequestParams => ({
  endpoint: fetchTodosEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
