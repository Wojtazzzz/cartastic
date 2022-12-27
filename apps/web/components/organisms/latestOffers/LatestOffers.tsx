import { Heading } from 'components/atoms/heading/Heading';
import Image from 'next/image';
import { use } from 'react';
import { fetchData } from 'utils/fetchData';
import { CardOffer } from '../cardOffer/CardOffer';
import SadSmileIcon from 'components/icons/sad-smile.svg';
import type { CarsLatestResponse } from 'utils/types';

export const LatestOffers = () => {
	const cars = use(fetchData<CarsLatestResponse>('/cars/latest'));

	return (
		<section className="w-full max-w-[1700px] flex flex-col gap-5 mt-8 mx-auto py-2 md:py-4 px-3 md:px-6 lg:px-10">
			<Heading tag="h2" className="text-2xl font-extrabold">
				Latest Offers
			</Heading>

			{cars.length <= 0 ? (
				<div className="w-full flex flex-col gap-5 items-center">
					<Image src={SadSmileIcon} width="120" height="120" alt="Long face" />

					<span className="text-2xl text-center font-medium">
						At this moment we {"don't"} have any car notice
					</span>
				</div>
			) : (
				<ul className="flex flex-wrap justify-center gap-6">
					{cars.map((car, i) => (
						<li key={i}>
							<CardOffer {...car} />
						</li>
					))}
				</ul>
			)}
		</section>
	);
};
