import { LatestOffers } from 'components/organisms/latestOffers/LatestOffers';
import { Suspense } from 'react';

export const Home = () => {
	return (
		<div className="">
			<Suspense fallback={<span className="text-black">Loading...</span>}>
				<LatestOffers />
			</Suspense>
		</div>
	);
};
