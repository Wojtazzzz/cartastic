import type { FastifyPluginAsync } from 'fastify';

const modules: FastifyPluginAsync = async (fastify) => {
	await fastify.register(import('./brands/brands.routes'), { prefix: '/brands' });
	await fastify.register(import('./cars'), { prefix: '/cars' });
};

export default modules;
