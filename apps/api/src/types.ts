import type {
	ContextConfigDefault,
	RawReplyDefaultExpression,
	RawRequestDefaultExpression,
	RawServerDefault,
} from 'fastify';
import type { RouteGenericInterface, RouteHandlerMethod } from 'fastify/types/route';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import type { FastifySchema } from 'fastify';
import type { TSchema } from '@sinclair/typebox';

export type RouteHandlerMethodTypeBox<TSchema> = RouteHandlerMethod<
	RawServerDefault,
	RawRequestDefaultExpression<RawServerDefault>,
	RawReplyDefaultExpression<RawServerDefault>,
	RouteGenericInterface,
	ContextConfigDefault,
	TSchema,
	TypeBoxTypeProvider
>;

export type FastifySchemaTypeBox = {
	[key in keyof Omit<FastifySchema, 'response'>]: TSchema;
} & { response?: { [key: number]: TSchema } };
