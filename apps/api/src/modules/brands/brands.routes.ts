import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import type { FastifyPluginAsync } from 'fastify';
import { getBrandModelsSchema, getBrandsSchema } from './brands.schema';

const brandsModule: FastifyPluginAsync = async (fastify) => {
	fastify.withTypeProvider<TypeBoxTypeProvider>().route({
		url: '/',
		method: 'GET',
		schema: getBrandsSchema,
		async handler() {
			const brands = await fastify.prisma.brand.findMany({
				include: {
					models: true,
				},
			});

			return brands;
		},
	});

	fastify.withTypeProvider<TypeBoxTypeProvider>().route({
		url: '/:brandId/models',
		method: 'GET',
		schema: getBrandModelsSchema,
		async handler(request) {
			const brandId = request.params.brandId;

			const models = await fastify.prisma.model.findMany({
				where: {
					brandId,
				},
			});

			return models;
		},
	});
};

export default brandsModule;
