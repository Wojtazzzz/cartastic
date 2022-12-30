import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { axios } from 'utils/axios';
import { getSearchCarOffersCountQK } from 'utils/queryKeys';
import type { CarOffersCountResponse } from 'utils/types';

const MIN = 10000;
const MAX = 99999;

export const useGetResultsCount = () => {
	const [animatedCount, setAnimatedCount] = useState(64379);

	const interval = setInterval(() => {
		animate();
	}, 100);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		return () => clearInterval(interval);
	}, [interval]);

	const animate = () => {
		setAnimatedCount(() => Math.floor(Math.random() * (MAX - MIN) + MIN));
	};

	const { data: count } = useQuery({
		queryKey: getSearchCarOffersCountQK(),
		queryFn: async () => await queryFn(),
	});

	return count ?? animatedCount;
};

const queryFn = async () => {
	return await axios
		.get<CarOffersCountResponse>('/carOffers/count')
		.then((response) => response.data);
};
