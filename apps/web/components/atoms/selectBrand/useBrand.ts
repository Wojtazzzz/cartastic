import { useSearchFormContext } from 'components/contexts/SearchFormContext';

export const useBrand = () => {
	const { brand, changeBrand } = useSearchFormContext();

	return {
		brand,
		changeBrand,
	};
};
