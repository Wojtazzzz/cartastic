import { createContext, useContext, useReducer } from 'react';
import type { ChangeEvent } from 'react';
import type { ReactNode } from 'react';
import { searchFormReducer } from './searchFormReducer';

export type SearchFormValues = {
	brand: number;
	model: number;
	minPrice: number;
	maxPrice: number;
};

export type SearchFormState = {
	reset: () => void;
	changeBrand: (value: number) => void;
	changeModel: (value: number) => void;
	changeMinPrice: (event: ChangeEvent<HTMLInputElement>) => void;
	changeMaxPrice: (event: ChangeEvent<HTMLInputElement>) => void;
} & SearchFormValues;

export const initialState: SearchFormState = {
	brand: 0,
	model: 0,
	minPrice: 0,
	maxPrice: 0,
	reset: () => null,
	changeBrand: () => null,
	changeModel: () => null,
	changeMinPrice: () => null,
	changeMaxPrice: () => null,
};

const SearchFormContext = createContext(initialState);

type SearchFormContextProviderProps = {
	children: ReactNode;
};

export const SearchFormContextProvider = ({ children }: SearchFormContextProviderProps) => {
	const [state, dispatch] = useReducer(searchFormReducer, initialState);

	const reset = () => {
		const newState = {
			...state,
			brand: 0,
			model: 0,
			minPrice: 0,
			maxPrice: 0,
		};

		dispatch({
			type: 'RESET',
			payload: newState,
		});
	};

	const changeBrand = (value: number) => {
		const newState = {
			...state,
			brand: value,
		};

		dispatch({
			type: 'CHANGE_BRAND',
			payload: newState,
		});
	};

	const changeModel = (value: number) => {
		const newState = {
			...state,
			model: value,
		};

		dispatch({
			type: 'CHANGE_MODEL',
			payload: newState,
		});
	};

	const changeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
		const newState = {
			...state,
			minPrice: Number(event.target.value),
		};

		dispatch({
			type: 'CHANGE_MIN_PRICE',
			payload: newState,
		});
	};

	const changeMaxPrice = (event: ChangeEvent<HTMLInputElement>) => {
		const newState = {
			...state,
			maxPrice: Number(event.target.value),
		};

		dispatch({
			type: 'CHANGE_MAX_PRICE',
			payload: newState,
		});
	};

	const value = {
		...state,
		reset,
		changeBrand,
		changeModel,
		changeMinPrice,
		changeMaxPrice,
	};

	return <SearchFormContext.Provider value={value}>{children}</SearchFormContext.Provider>;
};

export const useSearchFormContext = () => {
	const context = useContext(SearchFormContext);

	if (context === undefined) {
		throw new Error('useSearchFormContext must be used within SearchFormContext');
	}

	return context;
};
