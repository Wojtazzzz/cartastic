import type { SearchFormValues } from 'components/molecules/searchForm/SearchForm';

export const useSearch = () => {
	const search = (values: SearchFormValues) => {
		console.log(values);
	};

	return {
		search,
	};
};
