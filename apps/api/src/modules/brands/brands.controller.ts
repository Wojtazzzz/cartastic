import type { FastifyRequest } from 'fastify';
import { getBrands } from './brands.service';

export const getBrandsHandler = (request: FastifyRequest) => {
	return getBrands(request.server.prisma);
};
