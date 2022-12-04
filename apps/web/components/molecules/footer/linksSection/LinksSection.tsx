import { InfoSectionContainer } from 'components/atoms/footer/infoSectionContainer/InfoSectionContainer';
import { Heading } from 'components/atoms/heading/Heading';
import Link from 'next/link';

export const LinksSection = () => {
	return (
		<InfoSectionContainer>
			<Heading tag="h2" className="font-bold">
				Links
			</Heading>

			<Link href="/" className="w-fit hover:underline">
				Home
			</Link>

			<Link href="/shortlist" className="w-fit hover:underline">
				Shortlist
			</Link>

			<Link href="/sell" className="w-fit hover:underline">
				Sell own car
			</Link>
		</InfoSectionContainer>
	);
};
