import { PrismaClient } from '@prisma/client';
import { carOfferSeeder } from './carOfferSeeder';

const prisma = new PrismaClient();

const main = async () => {
	await prisma.carOffer.deleteMany({});

	await prisma.carOffer.createMany({
		data: [
			await carOfferSeeder(prisma),
			await carOfferSeeder(prisma),
			await carOfferSeeder(prisma),
			await carOfferSeeder(prisma),
			await carOfferSeeder(prisma),
			await carOfferSeeder(prisma),
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
