import Image from 'next/image';
import type { CarOffersLatestResponse } from 'utils/types';
import SadSmileIcon from 'components/icons/sad-smile.svg';
import { Heading } from 'components/atoms/heading/Heading';
import { CardOffer } from '../cardOffer/CardOffer';
import { fetchData } from 'utils/fetchData';

export const LatestOffers = async () => {
	const carOffers = await fetchData<CarOffersLatestResponse>('/carOffers/latest');

	return (
		<section className="w-full max-w-[1700px] flex flex-col gap-5 mt-8 mx-auto py-2 md:py-4 px-3 md:px-6 lg:px-10">
			<Heading tag="h2" className="text-2xl font-extrabold">
				Latest Offers
			</Heading>

			{carOffers.length <= 0 ? (
				<div className="w-full flex flex-col gap-5 items-center">
					<Image src={SadSmileIcon} width="120" height="120" alt="Long face" />

					<span className="text-2xl text-center font-medium">
						At this moment we {"don't"} have any car notice
					</span>
				</div>
			) : (
				<ul className="flex flex-wrap justify-center gap-6">
					{carOffers.map((carOffer, i) => (
						<li key={i}>
							<CardOffer {...carOffer} />
						</li>
					))}
				</ul>
			)}
		</section>
	);
};
