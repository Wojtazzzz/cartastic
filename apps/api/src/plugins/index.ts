import type { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

const modules: FastifyPluginAsync = async (fastify) => {
	await fastify.register(import('./prisma'));
	await fastify.register(import('./sensible'));
};

export default fp(modules);
