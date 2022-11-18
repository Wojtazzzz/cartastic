import type {
	ContextConfigDefault,
	FastifyBaseLogger,
	FastifyRequest,
	FastifyTypeProviderDefault,
	RawRequestDefaultExpression,
	RawServerDefault,
} from 'fastify';
import type { RouteGenericInterface } from 'fastify/types/route';
import type { FastifySchema } from 'fastify';
import type { TSchema } from '@sinclair/typebox';
import { ResolveFastifyRequestType } from 'fastify/types/type-provider';

export type FastifySchemaTypeBox = {
	[key in keyof Omit<FastifySchema, 'response'>]: TSchema;
} & { response?: { [key: number]: TSchema } };

export type Request<Schema extends FastifySchema> = FastifyRequest<
	RouteGenericInterface,
	RawServerDefault,
	RawRequestDefaultExpression<RawServerDefault>,
	Schema,
	FastifyTypeProviderDefault,
	ContextConfigDefault,
	FastifyBaseLogger,
	ResolveFastifyRequestType<FastifyTypeProviderDefault, FastifySchema, RouteGenericInterface>
>;
