import { useSearchFormContext } from 'components/contexts/SearchFormContext';
import type { ChangeEvent } from 'react';

export const useBrand = () => {
	const { brand, changeBrand, changeModel } = useSearchFormContext();

	const handleChangeBrand = (event: ChangeEvent<HTMLSelectElement>) => {
		changeModel(0);
		changeBrand(Number(event.target.value));
	};

	return {
		brand,
		changeBrand: handleChangeBrand,
	};
};
