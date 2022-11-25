import type { SearchFormValues } from 'components/contexts/SearchFormContext';
import { useSearchFormContext } from 'components/contexts/SearchFormContext';

export const useSearchLink = () => {
	const { brand, model } = useSearchFormContext();

	return getLink({ brand, model });
};

const getLink = ({ brand, model }: Pick<SearchFormValues, 'brand' | 'model'>) => {
	if (brand && model) {
		return `/${brand}/${model}`;
	}

	if (brand && !model) {
		return `/${brand}`;
	}

	return '/all';
};
