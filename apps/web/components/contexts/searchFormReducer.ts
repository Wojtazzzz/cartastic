import type { ChangeEvent } from 'react';

export type SearchFormValues = {
	brand: number | undefined;
	model: number | undefined;
	minPrice: number;
	maxPrice: number;
	reset: () => void;
	changeBrand: (value: number) => void;
	changeModel: (value: number) => void;
	changeMinPrice: (event: ChangeEvent<HTMLInputElement>) => void;
	changeMaxPrice: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const initialState: SearchFormValues = {
	brand: undefined,
	model: undefined,
	minPrice: 0,
	maxPrice: 0,
	reset: () => null,
	changeBrand: () => null,
	changeModel: () => null,
	changeMinPrice: () => null,
	changeMaxPrice: () => null,
};

type Type = 'RESET' | 'CHANGE_BRAND' | 'CHANGE_MODEL' | 'CHANGE_MIN_PRICE' | 'CHANGE_MAX_PRICE';

type Action = {
	type: Type;
	payload: SearchFormValues;
};

export const searchFormReducer = (state: SearchFormValues, action: Action) => {
	const { type, payload } = action;

	switch (type) {
		case 'RESET':
			return {
				...payload,
			};

		case 'CHANGE_BRAND':
			return {
				...state,
				brand: payload.brand,
			};

		case 'CHANGE_MODEL':
			return {
				...state,
				model: payload.model,
			};

		case 'CHANGE_MIN_PRICE':
			return {
				...state,
				minPrice: payload.minPrice,
			};

		case 'CHANGE_MAX_PRICE':
			return {
				...state,
				maxPrice: payload.maxPrice,
			};

		default:
			throw new Error(`No case for type ${type} found in searchFormReducer.`);
	}
};
