import { Type } from '@sinclair/typebox';
import { createSchema } from '../../utils/createSchema';

export const carSchema = {
	id: Type.Number(),
	images: Type.Array(Type.String()),
	price: Type.Number(),
	productionYear: Type.Number(),
	miles: Type.Number(),
	fuel: Type.String(),
	engine: Type.Number(),
	body: Type.String(),
	transmission: Type.String(),
	brandId: Type.Number(),
	brand: Type.Object({
		id: Type.Number(),
		name: Type.String(),
	}),
	modelId: Type.Number(),
	model: Type.Object({
		id: Type.Number(),
		name: Type.String(),
	}),
} as const;

export const getCarsCountSchema = createSchema({
	response: {
		200: Type.Number(),
	},
});

export const getLatestCarsSchema = {
	response: {
		200: Type.Array(Type.Object(carSchema)),
	},
};
