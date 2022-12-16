import { AppName } from 'components/atoms/appName/AppName';
import { Heading } from 'components/atoms/heading/Heading';
import Link from 'next/link';

export const AppNameLink = () => {
	return (
		<Heading tag="h1" className="text-xl md:text-2xl">
			<Link href="/">
				<AppName />
			</Link>
		</Heading>
	);
};
