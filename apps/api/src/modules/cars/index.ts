import type {
	FastifyPluginCallbackTypebox,
	TypeBoxTypeProvider,
} from '@fastify/type-provider-typebox';
import { getCarsCountSchema, getLatestCarsSchema } from './cars.schema';
import { getCarsCount } from './cars.service';

const carsModule: FastifyPluginCallbackTypebox = (fastify, _options, done) => {
	fastify.get('/count', { schema: getCarsCountSchema }, (req) => {
		const prisma = fastify.prisma;

		return getCarsCount(prisma);
	});

	fastify.withTypeProvider<TypeBoxTypeProvider>().route({
		url: '/latest',
		method: 'GET',
		schema: getLatestCarsSchema,
		async handler(request, reply) {
			const cars = await fastify.prisma.car.findMany({
				include: {
					brand: {
						select: {
							id: true,
							name: true,
						},
					},
					model: {
						select: {
							id: true,
							name: true,
						},
					},
				},
			});

			const data = cars.map((car) => ({
				...car,
				images: Array.isArray(car.images)
					? car.images?.map((img) => JSON.stringify(img))
					: [],
			}));

			return data;
		},
	});

	done();
};

export default carsModule;
