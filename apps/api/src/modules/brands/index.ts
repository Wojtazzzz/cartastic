import type { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { getBrandsHandler } from './brands.controller';
import { getBrandModelsSchema, getBrandsSchema } from './brands.schema';
import { getBrandModels } from './brands.service';

const brandsModule: FastifyPluginCallbackTypebox = (fastify, _options, done) => {
	fastify.get('/', { schema: getBrandsSchema }, getBrandsHandler);

	fastify.get('/:brandId/models', { schema: getBrandModelsSchema }, (req) => {
		const prisma = fastify.prisma;
		const brandId = req.params.brandId;

		return getBrandModels(prisma, brandId);
	});

	done();
};

export default brandsModule;
