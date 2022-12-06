import nock from 'nock';
import { API_URL } from './env';

const allowedHeaders = [
	'ClientName',
	'ClientVersion',
	'Content-Type',
	'Authorization',
	'X-Requested-With',
];

const ReplyHeaders = {
	'access-control-allow-origin': '*',
	'access-control-allow-credentials': 'true',
	'access-control-allow-headers': allowedHeaders.join(','),
};

type ISuccess = 200 | 201 | 202 | 204;
type IUserError = 400 | 401 | 403 | 404 | 405 | 408 | 413 | 422;
type IServerError = 500 | 501 | 502 | 503 | 504;
type IStatus = ISuccess | IUserError | IServerError;
type IMethod = 'get' | 'post' | 'delete' | 'put';

type IMockFunctionArguments = {
	path: string;
	status?: IStatus;
	data?: {};
	method?: IMethod;
	times?: number;
};

export const mockRequest = ({
	path,
	status = 200,
	data = {},
	method = 'get',
	times = 0,
}: IMockFunctionArguments) => {
	nock(API_URL).defaultReplyHeaders(ReplyHeaders).options(path).times(times).reply(200);
	nock(API_URL).defaultReplyHeaders(ReplyHeaders)[method](path).times(times).reply(status, data);
};
