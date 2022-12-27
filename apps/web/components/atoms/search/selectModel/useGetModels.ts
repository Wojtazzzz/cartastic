import { useQuery } from '@tanstack/react-query';
import { useSearchFormContext } from 'components/contexts/SearchFormContext';
import { axios } from 'utils/axios';
import { getBrandModelsQK } from 'utils/queryKeys';
import type { ModelsByBrandResponse } from 'utils/types';

export const useGetModels = () => {
	const { brand } = useSearchFormContext();

	/* brand is number | undefined */
	/* assertion because it will be called only when brand is defined */
	return useQuery({
		queryKey: getBrandModelsQK(brand),
		queryFn: async () => await fetchModels(brand),
		enabled: Boolean(brand),
	});
};

const fetchModels = async (brandId: number) => {
	return await axios
		.get<ModelsByBrandResponse>(`/brands/${brandId}/models`)
		.then((response) => response.data);
};
