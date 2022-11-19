import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchFormContext } from 'components/contexts/SearchFormContext';
import type { Model } from 'components/organisms/search/Search';

export const useGetModels = () => {
	const { brand, changeModel } = useSearchFormContext();

	return useQuery<Model[]>({
		queryKey: ['models', brand],
		/* brand is number | undefined */
		/* assertion because it will be called only when brand is defined */
		queryFn: async () => await fetchModels(brand as number),
		enabled: Boolean(brand),
		onSuccess: (data) => data[0] && changeModel(data[0].id),
	});
};

const fetchModels = async (brandId: number) => {
	return await axios
		.get(`http://localhost:8000/brands/${brandId}/models`)
		.then((response) => response.data);
};
