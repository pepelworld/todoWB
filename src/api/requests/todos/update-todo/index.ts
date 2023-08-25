import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { UpdatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { makeRequestConfig } from './make-request-config';

type ParamsType = {
  body: UpdatedTodoType;
};
export const updateTodoRequest = ({ body }: ParamsType): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(body));
