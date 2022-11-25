import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const carSeeder = async () => {
	await prisma.model.create({
		data: {
			name: 'Series 3',
			brandId: 1,
		},
	});

	await prisma.car.create({
		data: {
			images: {},
			price: 20000,
			productionDate: new Date(),
			miles: 1000,
			fuel: 'diesel',
			engine: 2.0,
			body: 'saloon',
			transmission: 'auto',
			brandId: 1,
			modelId: 1,
		},
	});
};
