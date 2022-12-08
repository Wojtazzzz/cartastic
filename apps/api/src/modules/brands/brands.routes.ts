import type {
	FastifyPluginCallbackTypebox,
	TypeBoxTypeProvider,
} from '@fastify/type-provider-typebox';
import { getBrandModelsSchema, getBrandsSchema } from './brands.schema';

const brandsModule: FastifyPluginCallbackTypebox = (fastify, _options, done) => {
	fastify.withTypeProvider<TypeBoxTypeProvider>().route({
		url: '/',
		method: 'GET',
		schema: getBrandsSchema,
		async handler(request, reply) {
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
		async handler(request, reply) {
			const brandId = request.params.brandId;

			const models = await fastify.prisma.model.findMany({
				where: {
					brandId,
				},
			});

			return models;
		},
	});

	done();
};

export default brandsModule;
