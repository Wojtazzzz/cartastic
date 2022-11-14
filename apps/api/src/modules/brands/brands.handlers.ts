import type { RouteHandlerMethodTypeBox } from '../../types';
import { getBrandsSchema } from './brands.schemas';

export const getBrands: RouteHandlerMethodTypeBox<typeof getBrandsSchema> = async (request) => {
	const prisma = request.server.prisma;

	const brands = await prisma.brand.findMany({
		include: {
			models: true,
		},
	});

	return brands;
};
