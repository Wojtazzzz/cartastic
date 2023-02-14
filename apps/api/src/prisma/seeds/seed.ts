import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	await prisma.carOffer.deleteMany({});

	await prisma.carOffer.createMany({
		data: [
			{
				images: {},
				price: 20000,
				productionYear: 2021,
				miles: 1000,
				fuel: 'diesel',
				doors: 5,
				hp: 80,
				topSpeed: 120,
				gears: 4,
				engine: 2.0,
				body: 'saloon',
				transmission: 'auto',
				brandId: 1,
				modelId: 1,
			},
			{
				images: {},
				price: 20000,
				productionYear: 2021,
				miles: 1000,
				fuel: 'diesel',
				doors: 5,
				hp: 80,
				topSpeed: 120,
				gears: 4,
				engine: 2.0,
				body: 'saloon',
				transmission: 'auto',
				brandId: 1,
				modelId: 2,
			},
		],
	});
};

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
