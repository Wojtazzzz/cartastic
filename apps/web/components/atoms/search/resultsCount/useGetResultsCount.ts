import { useQuery } from '@tanstack/react-query';
import { useLayoutEffect, useState } from 'react';
import { axios } from 'utils/axios';
import { getSearchCarsCountQK } from 'utils/queryKeys';
import type { CarsCountResponse } from 'utils/types';

const MIN = 10000;
const MAX = 99999;

export const useGetResultsCount = () => {
	const [animatedCount, setAnimatedCount] = useState(64379);

	const interval = setInterval(() => {
		animate();
	}, 100);

	useLayoutEffect(() => {
		return () => clearInterval(interval);
	}, [interval]);

	const animate = () => {
		setAnimatedCount(() => Math.floor(Math.random() * (MAX - MIN) + MIN));
	};

	const { data: count } = useQuery({
		queryKey: getSearchCarsCountQK(),
		queryFn: async () => await queryFn(),
	});

	return count ?? animatedCount;
};

const queryFn = async () => {
	return await axios.get<CarsCountResponse>('/cars/count').then((response) => response.data);
};
