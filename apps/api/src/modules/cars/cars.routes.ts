import type {
	FastifyPluginCallbackTypebox,
	TypeBoxTypeProvider,
} from '@fastify/type-provider-typebox';
import { getCarsCountSchema, getLatestCarsSchema } from './cars.schema';

const carsModule: FastifyPluginCallbackTypebox = (fastify, options, done) => {
	fastify.withTypeProvider<TypeBoxTypeProvider>().route({
		url: '/count',
		method: 'GET',
		schema: getCarsCountSchema,
		async handler() {
			const count = await fastify.prisma.car.count();

			return count;
		},
	});

	fastify.withTypeProvider<TypeBoxTypeProvider>().route({
		url: '/latest',
		method: 'GET',
		schema: getLatestCarsSchema,
		async handler() {
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
