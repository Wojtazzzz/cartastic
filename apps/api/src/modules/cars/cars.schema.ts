import { Type } from '@sinclair/typebox';
import { createSchema } from '../../utils/createSchema';

export const carSchema = Type.Object({
	id: Type.Number(),
	name: Type.String(),
	price: Type.Number(),
});

export const getCarsCountSchema = createSchema({
	response: {
		200: Type.Number(),
	},
});
