import Fastify from 'fastify';
import { Type } from '@sinclair/typebox';
import type { FastifyServerOptions } from 'fastify';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

export const createServer = async (opts?: FastifyServerOptions) => {
	const fastify = Fastify(opts).withTypeProvider<TypeBoxTypeProvider>();

	fastify.get(
		'/ping',
		{
			schema: {
				response: {
					200: Type.String(),
				},
			},
		},
		() => {
			return 'pong';
		}
	);

	return fastify;
};
