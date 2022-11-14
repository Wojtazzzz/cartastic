import type { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { getBrands } from './brands.handlers';
import { getBrandsSchema } from './brands.schemas';

const brandsPlugin: FastifyPluginCallbackTypebox = (fastify, _options, done) => {
	fastify.get('/', { schema: getBrandsSchema }, getBrands);

	done();
};

export default brandsPlugin;
