import type { SearchFormValues } from 'components/contexts/SearchFormContext';
import { useSearchFormContext } from 'components/contexts/SearchFormContext';

export const useSearchLink = () => {
	const { brand, model, minPrice, maxPrice } = useSearchFormContext();

	return getLink({ brand, model, minPrice, maxPrice });
};

const getLink = ({ brand, model, minPrice, maxPrice }: SearchFormValues) => {
	const brandParam = brand ? `/${brand}` : '/all';
	const modelParam = model && brand ? `/${model}` : '';

	const minPriceQuery = minPrice ? `?minPrice=${minPrice}` : '';
	const maxPriceQuery = maxPrice ? `?maxPrice=${maxPrice}` : '';

	return brandParam + modelParam + minPriceQuery + maxPriceQuery;
};
