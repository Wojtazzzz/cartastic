import type { PrismaClient } from '@prisma/client';

export const getBrands = (prisma: PrismaClient) => {
	const brands = prisma.brand.findMany({
		include: {
			models: true,
		},
	});

	return brands;
};

export const getBrandModels = (prisma: PrismaClient, brandId: number) => {
	const models = prisma.model.findMany({
		where: {
			brandId,
		},
	});

	return models;
};
