import { Heading } from 'components/atoms/heading/Heading';
import { CardOffer } from '../cardOffer/CardOffer';

type LatestOffersProps = {};

export const LatestOffers = ({}: LatestOffersProps) => {
	const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<section className="w-full max-w-[1700px] flex flex-col gap-5 mt-8 mx-auto py-2 md:py-4 px-3 md:px-6 lg:px-10">
			<Heading tag="h2" className="text-2xl font-extrabold">
				Latest Offers
			</Heading>

			<ul className="flex flex-wrap justify-center gap-6">
				{array.map((offer, i) => (
					<li key={i}>
						<CardOffer />
					</li>
				))}
			</ul>
		</section>
	);
};
