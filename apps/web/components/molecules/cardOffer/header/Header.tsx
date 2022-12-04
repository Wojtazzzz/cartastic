import { Heading } from 'components/atoms/heading/Heading';

type HeaderProps = {
	brand: string;
	model: string;
	productionDate: string;
};

export const Header = ({ brand, model, productionDate }: HeaderProps) => {
	return (
		<header className="py-3 px-4">
			<Heading tag="h3" className="text-lg font-extrabold -mb-2">
				{brand}, {model}
			</Heading>

			<small className="text-sm text-gray-500 font-bold">{productionDate}</small>
		</header>
	);
};
