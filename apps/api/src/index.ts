import type { AutoloadPluginOptions } from '@fastify/autoload';
import type { FastifyPluginAsync } from 'fastify';

export type AppOptions = {} & Partial<AutoloadPluginOptions>;
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
	void fastify.register(import('@fastify/cors'), {
		origin: 'http://localhost:3000',
	});
	void fastify.register(import('@fastify/swagger'));
	void fastify.register(import('@fastify/swagger-ui'), { routePrefix: '/docs' });

	void fastify.register(import('./plugins'), opts);
	void fastify.register(import('./modules'), opts);
};

export default app;
export { app, options };
