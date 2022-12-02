import { Details } from 'components/molecules/cardOffer/details/Details';
import { Header } from 'components/molecules/cardOffer/header/Header';
import { OfferImage } from 'components/molecules/cardOffer/offerImage/OfferImage';
import Link from 'next/link';

type CardOfferProps = {};

export const CardOffer = ({}: CardOfferProps) => {
	return (
		<Link href="/offer/1">
			<article className="w-[295px] h-[400px] rounded-lg shadow-[0_0_4px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_0_6px_3px_rgba(0,0,0,0.3)] transition-shadow ease-in">
				<Header brand="BMW" model="Series 3" productionDate="2012" />
				<OfferImage src="/img/offer-image.png" />
				<Details />
			</article>
		</Link>
	);
};
