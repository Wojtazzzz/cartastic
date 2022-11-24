import { useSearchFormContext } from 'components/contexts/SearchFormContext';

export const useMaxPrice = () => {
	const { maxPrice, changeMaxPrice } = useSearchFormContext();

	return {
		maxPrice,
		changeMaxPrice,
	};
};
