import { Heading } from 'components/atoms/heading/Heading';
import type { CarOffer } from 'utils/types';

type HeaderProps = {
	text: string;
} & Pick<CarOffer, 'productionYear'>;

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
