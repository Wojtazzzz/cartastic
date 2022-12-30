import type {
	FastifyPluginCallbackTypebox,
	TypeBoxTypeProvider,
} from '@fastify/type-provider-typebox';
import { getCarOffersCountSchema, getLatestCarOffersSchema } from './carOffers.schema';

const carOffersModule: FastifyPluginCallbackTypebox = (fastify, options, done) => {
	fastify.withTypeProvider<TypeBoxTypeProvider>().route({
		url: '/count',
		method: 'GET',
		schema: getCarOffersCountSchema,
		async handler() {
			const count = await fastify.prisma.carOffer.count();

			return count;
		},
	});

	fastify.withTypeProvider<TypeBoxTypeProvider>().route({
		url: '/latest',
		method: 'GET',
		schema: getLatestCarOffersSchema,
		async handler() {
			const carOffers = await fastify.prisma.carOffer.findMany({
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

			const data = carOffers.map((carOffer) => ({
				...carOffer,
				images: Array.isArray(carOffer.images)
					? carOffer.images?.map((img) => JSON.stringify(img))
					: [],
			}));

			return data;
		},
	});

	done();
};

export default carOffersModule;
