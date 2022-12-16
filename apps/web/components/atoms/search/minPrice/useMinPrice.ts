import { useSearchFormContext } from 'components/contexts/SearchFormContext';

export const useMinPrice = () => {
	const { minPrice, changeMinPrice } = useSearchFormContext();

	return {
		minPrice,
		changeMinPrice,
	};
};
