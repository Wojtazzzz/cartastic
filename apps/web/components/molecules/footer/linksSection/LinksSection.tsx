import { InfoSectionContainer } from 'components/atoms/footer/infoSectionContainer/InfoSectionContainer';
import { Heading } from 'components/atoms/heading/Heading';
import Link from 'next/link';

export const LinksSection = () => {
	return (
		<InfoSectionContainer>
			<Heading tag="h2" className="font-bold">
				Links
			</Heading>

			<Link href="/" className="w-fit hover:underline text-sm">
				Home
			</Link>

			<Link href="/shortlist" className="w-fit hover:underline text-sm">
				Shortlist
			</Link>

			<Link href="/sell" className="w-fit hover:underline text-sm">
				Sell own car
			</Link>
		</InfoSectionContainer>
	);
};
