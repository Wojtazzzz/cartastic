import type { PrismaClient } from '@prisma/client';

export const getCarsCount = (prisma: PrismaClient) => {
	return prisma.car.count();
};
