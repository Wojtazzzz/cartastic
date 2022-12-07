'use client';

import { formatNumber } from 'utils/formatNumber';
import { useGetResultsCount } from './useGetResultsCount';

export const SearchResultsCount = () => {
	const count = useGetResultsCount();
	const formattedCount = formatNumber(count, ',');

	return (
		<small className="text-base text-white font-bold mt-16">
			Choose one of {formattedCount} cars in our offer
		</small>
	);
};
