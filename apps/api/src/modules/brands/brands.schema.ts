import { Type } from '@sinclair/typebox';
import { createSchema } from '../../utils/createSchema';

export const modelSchema = Type.Object({
	id: Type.Number(),
	name: Type.String(),
	brandId: Type.Number(),
});

export const brandSchema = Type.Object({
	id: Type.Number(),
	name: Type.String(),
});

export const brandWithModelsSchema = Type.Intersect([
	brandSchema,
	Type.Object({
		models: Type.Array(modelSchema),
	}),
]);

export const getBrandsSchema = createSchema({
	response: {
		200: Type.Array(brandSchema),
	},
});

export const getBrandModelsSchema = {
	params: Type.Object({
		brandId: Type.Integer(),
	}),
	response: {
		200: Type.Array(modelSchema),
	},
};
