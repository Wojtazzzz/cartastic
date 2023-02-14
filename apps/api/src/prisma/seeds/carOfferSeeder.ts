import type { Body, CarOffer, Fuel, Prisma, PrismaClient, Transmission } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const carOfferSeeder = async (prisma: PrismaClient, carOffer?: Partial<CarOffer>) => {
	const maxBrandId = 140;

	const randomBrandId = faker.datatype.number({ min: 1, max: maxBrandId });
	const modelsForRandomBrand = await prisma.model.findMany({
		where: {
			brandId: randomBrandId,
		},
	});

	const model = faker.helpers.arrayElement(modelsForRandomBrand);
	return {
		images: faker.helpers.arrayElements(
			[
				faker.image.imageUrl(768, 512, 'car', true),
				faker.image.imageUrl(768, 512, 'car', true),
				faker.image.imageUrl(768, 512, 'car', true),
				faker.image.imageUrl(768, 512, 'car', true),
				faker.image.imageUrl(768, 512, 'car', true),
				faker.image.imageUrl(768, 512, 'car', true),
				faker.image.imageUrl(768, 512, 'car', true),
				faker.image.imageUrl(768, 512, 'car', true),
				faker.image.imageUrl(768, 512, 'car', true),
				faker.image.imageUrl(768, 512, 'car', true),
			],
			faker.datatype.number({ min: 1, max: 10 })
		),
		description: faker.lorem.paragraphs(faker.datatype.number({ min: 1, max: 5 })),
		price: faker.datatype.number({ min: 4000, max: 100000 }),
		productionYear: faker.datatype.number({ min: 1995, max: 2023 }),
		miles: faker.datatype.number({ min: 1, max: 99999 }),
		fuel: faker.helpers.arrayElement([
			'diesel',
			'petrol',
			'gasoline',
			'electric',
		] satisfies (keyof typeof Fuel)[]),
		doors: faker.datatype.number({ min: 2, max: 5 }),
		hp: faker.datatype.number({ min: 80, max: 500 }),
		topSpeed: faker.datatype.number({ min: 60, max: 250 }),
		gears: faker.datatype.number({ min: 3, max: 8 }),
		engine: faker.datatype.number({ min: 900, max: 7000 }),
		body: faker.helpers.arrayElement([
			'convertible',
			'coupe',
			'estate',
			'hatchback',
			'peopleCarrier',
			'pickup',
			'saloon',
			'suv',
		] satisfies (keyof typeof Body)[]),
		transmission: faker.helpers.arrayElement([
			'auto',
			'manual',
		] satisfies (keyof typeof Transmission)[]),
		brandId: randomBrandId,
		modelId: model ? model.id : undefined,
		...carOffer,
	} as Prisma.CarOfferCreateManyInput;
};
