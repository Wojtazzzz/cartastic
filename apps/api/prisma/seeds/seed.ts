import { PrismaClient } from '@prisma/client';
import { carSeeder } from './carSeeder';

const prisma = new PrismaClient();

const main = async () => {
	carSeeder();
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
