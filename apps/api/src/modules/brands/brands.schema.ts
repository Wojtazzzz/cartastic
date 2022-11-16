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
	models: Type.Array(modelSchema),
});

export const getBrandsSchema = createSchema({
	response: {
		200: Type.Array(brandSchema),
	},
});
