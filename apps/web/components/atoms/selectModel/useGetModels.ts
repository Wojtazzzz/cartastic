import { useQuery } from '@tanstack/react-query';
import { useSearchFormContext } from 'components/contexts/SearchFormContext';
import type { Model } from 'components/organisms/search/Search';
import { axios } from 'utils/axios';
import { getBrandModelsQK } from 'utils/queryKeys';

export const useGetModels = () => {
	const { brand, changeModel } = useSearchFormContext();

	/* brand is number | undefined */
	/* assertion because it will be called only when brand is defined */
	return useQuery<Model[]>({
		queryKey: getBrandModelsQK(brand as number),
		queryFn: async () => await fetchModels(brand as number),
		enabled: Boolean(brand),
		onSuccess: (data) => {
			if (data.length < 1) {
				return;
			}

			changeModel(data[0].id);
		},
	});
};

const fetchModels = async (brandId: number) => {
	return await axios.get(`/brands/${brandId}/models`).then((response) => response.data);
};
