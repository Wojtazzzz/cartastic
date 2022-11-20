import type { AutoloadPluginOptions } from '@fastify/autoload';
import type { FastifyPluginAsync } from 'fastify';

export type AppOptions = {} & Partial<AutoloadPluginOptions>;
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
	fastify.register(import('@fastify/cors'), {
		origin: 'http://localhost:3000',
		credentials: true,
	});

	fastify.register(import('@fastify/swagger'));
	fastify.register(import('@fastify/swagger-ui'), { routePrefix: '/docs' });

	fastify.register(import('./plugins'), opts);
	fastify.register(import('./modules'), opts);
};

export default app;
export { app, options };
