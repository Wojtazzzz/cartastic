import type { PrismaClient } from '@prisma/client';

export const getBrands = (prisma: PrismaClient) => {
	const brands = prisma.brand.findMany({
		include: {
			models: true,
		},
	});

	return brands;
};
