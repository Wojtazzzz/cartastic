import { Heading } from 'components/atoms/heading/Heading';
import type { Car } from 'components/organisms/latestOffers/LatestOffers';

type HeaderProps = {
	text: string;
} & Pick<Car, 'productionYear'>;

export const Header = ({ text, productionYear }: HeaderProps) => {
	return (
		<header className="py-3 px-4">
			<Heading tag="h3" className="text-lg font-extrabold -mb-2">
				{text}
			</Heading>

			<small className="text-sm text-gray-500 font-bold">{productionYear}</small>
		</header>
	);
};
