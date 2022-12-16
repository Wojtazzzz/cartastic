import { useSearchFormContext } from 'components/contexts/SearchFormContext';

export const useModels = () => {
	const { model, changeModel } = useSearchFormContext();

	return {
		model,
		changeModel,
	};
};
