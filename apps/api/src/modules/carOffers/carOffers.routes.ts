import type {
	FastifyPluginCallbackTypebox,
	TypeBoxTypeProvider,
} from '@fastify/type-provider-typebox';
import {
	getCarOfferByIdSchema,
	getCarOffersCountSchema,
	getCarOffersSchema,
	getLatestCarOffersSchema,
} from './carOffers.schema';

const carOffersModule: FastifyPluginCallbackTypebox = (fastify, options, done) => {
	fastify.withTypeProvider<TypeBoxTypeProvider>().route({
		url: '/',
		method: 'GET',
		schema: getCarOffersSchema,
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

	fastify.withTypeProvider<TypeBoxTypeProvider>().route({
		url: '/:carOfferId',
		method: 'GET',
		schema: getCarOfferByIdSchema,
		async handler(request) {
			const carOffer = await fastify.prisma.carOffer.findFirstOrThrow({
				where: {
					id: request.params.carOfferId,
				},
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

			return {
				...carOffer,
				images: Array.isArray(carOffer.images)
					? carOffer.images?.map((img) => JSON.stringify(img))
					: [],
			};
		},
	});

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
