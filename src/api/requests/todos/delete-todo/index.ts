import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { DeletedTodoType, makeRequestConfig } from './make-request-config';

export const deleteTodoRequest = (id: DeletedTodoType): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(id));
