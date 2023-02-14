import { Type } from '@sinclair/typebox';
import type { FastifySchemaTypeBox } from 'src/types';

export const carOfferSchema = {
	id: Type.Number(),
	images: Type.Array(Type.String()),
	price: Type.Number(),
	productionYear: Type.Number(),
	miles: Type.Number(),
	fuel: Type.String(),
	gears: Type.Number(),
	topSpeed: Type.Number(),
	hp: Type.Number(),
	doors: Type.Number(),
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

export const getCarOffersSchema = {
	response: {
		200: Type.Array(Type.Object(carOfferSchema)),
	},
} satisfies FastifySchemaTypeBox;

export const getCarOfferByIdSchema = {
	response: {
		200: Type.Object(carOfferSchema),
	},
	params: Type.Object({
		carOfferId: Type.Integer(),
	}),
} satisfies FastifySchemaTypeBox;

export const getCarOffersCountSchema = {
	response: {
		200: Type.Number(),
	},
} satisfies FastifySchemaTypeBox;

export const getLatestCarOffersSchema = {
	response: {
		200: Type.Array(Type.Object(carOfferSchema)),
	},
} satisfies FastifySchemaTypeBox;
