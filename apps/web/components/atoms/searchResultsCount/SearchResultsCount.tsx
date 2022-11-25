'use client';

import { formatPrice } from 'utils/formatPrice';
import { useGetResultsCount } from './useGetResultsCount';

export const SearchResultsCount = () => {
	const count = useGetResultsCount();
	const formattedCount = formatPrice(count);

	return (
		<small className="text-base text-white font-bold mt-16">
			Choose one of {formattedCount} cars in our offer
		</small>
	);
};
