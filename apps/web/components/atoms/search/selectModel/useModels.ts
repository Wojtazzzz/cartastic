import type { ChangeEvent } from 'react';
import { useSearchFormContext } from 'components/contexts/SearchFormContext';

export const useModels = () => {
	const { model, changeModel } = useSearchFormContext();

	const handleChangeModel = (event: ChangeEvent<HTMLSelectElement>) => {
		changeModel(Number(event.target.value));
	};

	return {
		model,
		changeModel: handleChangeModel,
	};
};
