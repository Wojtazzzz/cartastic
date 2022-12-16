import { useSearchFormContext } from 'components/contexts/SearchFormContext';
import type { ChangeEvent } from 'react';

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
