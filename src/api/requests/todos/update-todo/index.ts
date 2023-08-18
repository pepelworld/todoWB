import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { TodoType } from '@/api/requests/todos/_types';
import { makeRequestConfig } from './make-request-config';

export const updateTodoRequest = (updatedData: TodoType): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(updatedData));
