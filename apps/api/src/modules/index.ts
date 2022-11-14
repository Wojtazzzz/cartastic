import type { FastifyPluginAsync } from 'fastify';

const modules: FastifyPluginAsync = async (fastify) => {
	await fastify.register(import('./brands'), { prefix: '/brands' });
};

export default modules;
