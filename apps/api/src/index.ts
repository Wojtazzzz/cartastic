import type { AutoloadPluginOptions } from '@fastify/autoload';
import type { FastifyPluginAsync } from 'fastify';

export type AppOptions = Partial<AutoloadPluginOptions>;
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
	await fastify.register(import('@fastify/cors'), {
		origin: [
			'http://localhost:3000', // web
			'http://localhost:6006', // storybook
		],
		credentials: true,
	});

	await fastify.register(import('@fastify/swagger'), {
		openapi: {
			info: {
				title: 'Cartastic API',
				version: '0.1.0',
			},
		},
	});

	await fastify.register(import('@fastify/swagger-ui'), { routePrefix: '/docs' });

	await fastify.register(import('./plugins'), opts);
	await fastify.register(import('./modules'), opts);
};

export default app;
export { app, options };
