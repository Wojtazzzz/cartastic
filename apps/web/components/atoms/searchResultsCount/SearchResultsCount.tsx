'use client';

import { formatCount } from './formatCount';
import { useGetResultsCount } from './useGetResultsCount';

export const SearchResultsCount = () => {
	const count = useGetResultsCount();
	const formattedCount = formatCount(count);

	return (
		<small className="text-base text-white font-bold mt-16">
			Choose one of {formattedCount} cars in our offer
		</small>
	);
};
