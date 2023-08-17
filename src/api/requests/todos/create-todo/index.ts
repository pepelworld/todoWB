import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { CreatedTodoType, makeRequestConfig } from './make-request-config';

export const createTodoRequest = (
  createdTodo: CreatedTodoType,
): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(createdTodo));
