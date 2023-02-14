import Link from 'next/link';
import { Details } from 'components/molecules/cardOffer/details/Details';
import { Header } from 'components/molecules/cardOffer/header/Header';
import { OfferImage } from 'components/molecules/cardOffer/offerImage/OfferImage';
import type { CarOffer } from 'utils/types';

type CardOfferProps = CarOffer;

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
	const offerName = `${brand.name}${model?.name ? `, ${model.name}` : ''}`;

	return (
		<Link href={`/offer/${id}`}>
			<article className="w-[295px] h-[400px] rounded-lg bg-gray-100 shadow-md transition-shadow ease-in">
				<Header text={offerName} productionYear={productionYear} />
				<OfferImage
					src={images[0] ?? '/img/no-image.jpg'}
					imagesCount={images.length}
					alt={offerName}
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
