import type { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { getCarsCountSchema } from './cars.schema';
import { getCarsCount } from './cars.service';

const carsModule: FastifyPluginCallbackTypebox = (fastify, _options, done) => {
	fastify.get('/count', { schema: getCarsCountSchema }, (req) => {
		const prisma = fastify.prisma;

		return getCarsCount(prisma);
	});

	done();
};

export default carsModule;
