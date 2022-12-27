import { Suspense } from 'react';
import { LatestOffers } from 'components/organisms/latestOffers/LatestOffers';

export const Home = () => {
	return (
		<div className="">
			<Suspense fallback={<span className="text-black">Loading...</span>}>
				{/* @ts-ignore */}
				<LatestOffers />
			</Suspense>
		</div>
	);
};
