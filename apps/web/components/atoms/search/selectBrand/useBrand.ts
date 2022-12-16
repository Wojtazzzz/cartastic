import { useSearchFormContext } from 'components/contexts/SearchFormContext';

export const useBrand = () => {
	const { brand, changeBrand, changeModel } = useSearchFormContext();

	const handleChangeBrand = (value: number) => {
		changeModel(0);
		changeBrand(value);
	};

	return {
		brand,
		changeBrand: handleChangeBrand,
	};
};
