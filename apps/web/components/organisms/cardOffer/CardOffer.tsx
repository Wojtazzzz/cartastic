import { Details } from 'components/molecules/cardOffer/details/Details';
import { Header } from 'components/molecules/cardOffer/header/Header';
import { OfferImage } from 'components/molecules/cardOffer/offerImage/OfferImage';
import Link from 'next/link';
import type { Car } from 'utils/types';

type CardOfferProps = Car;

export const CardOffer = ({
	id,
	images,
	price,
	fuel,
	engine,
	transmission,
	miles,
	body,
	productionYear,
	brand,
	model,
}: CardOfferProps) => {
	return (
		<Link href={`/offer/${id}`}>
			<article className="w-[295px] h-[400px] rounded-lg shadow-[0_0_4px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_0_6px_3px_rgba(0,0,0,0.3)] transition-shadow ease-in">
				<Header text={`${brand.name}, ${model.name}`} productionYear={productionYear} />
				<OfferImage
					src={images[0] ?? '/img/no-image.jpg'}
					imagesCount={images.length}
					alt={`${brand.name}, ${model.name}`}
				/>
				<Details
					price={price}
					fuel={fuel}
					engine={engine}
					miles={miles}
					transmission={transmission}
					body={body}
				/>
			</article>
		</Link>
	);
};
