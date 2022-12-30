import { Type } from '@sinclair/typebox';
import type { FastifySchemaTypeBox } from 'src/types';

export const carOfferSchema = {
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
};

export const getCarOffersCountSchema = {
	response: Type.Object({
		200: Type.Number(),
	}),
} satisfies FastifySchemaTypeBox;

export const getLatestCarOffersSchema = {
	response: {
		200: Type.Array(Type.Object(carOfferSchema)),
	},
} satisfies FastifySchemaTypeBox;
