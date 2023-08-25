import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { CreatedTodoType, makeRequestConfig } from './make-request-config';

type ParamsType = {
  body: CreatedTodoType;
};
export const createTodoRequest = ({ body }: ParamsType): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(body));
