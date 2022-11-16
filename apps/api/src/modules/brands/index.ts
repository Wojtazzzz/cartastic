import type { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { getBrandsHandler } from './brands.controller';
import { getBrandsSchema } from './brands.schema';

const brandsModule: FastifyPluginCallbackTypebox = (fastify, _options, done) => {
	fastify.get('/', { schema: getBrandsSchema }, getBrandsHandler);

	done();
};

export default brandsModule;
