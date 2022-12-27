import type { SearchFormValues } from './SearchFormContext';

type ActionType =
	| 'RESET'
	| 'CHANGE_BRAND'
	| 'CHANGE_MODEL'
	| 'CHANGE_MIN_PRICE'
	| 'CHANGE_MAX_PRICE';

type Action = {
	type: ActionType;
	payload: SearchFormValues;
};

export const searchFormReducer = (state: SearchFormValues, action: Action) => {
	const { type, payload } = action;

	switch (type) {
		case 'RESET':
			return {
				...state,
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
			throw new Error(`No case for type ${String(type)} found in searchFormReducer.`);
	}
};
