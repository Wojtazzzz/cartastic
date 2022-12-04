'use client';

import Link from 'next/link';
import { InfoSectionContainer } from 'components/atoms/footer/infoSectionContainer/InfoSectionContainer';
import { Heading } from 'components/atoms/heading/Heading';
import { copyDiscordToClipboard } from './copyDiscordToClipboard';

export const ContactSection = () => {
	const copyDiscord = copyDiscordToClipboard();

	return (
		<InfoSectionContainer>
			<Heading tag="h2" className="font-bold">
				Contact
			</Heading>

			<Link href="mailto: marcin.witas72@gmail.com" className="w-fit hover:underline">
				Email
			</Link>

			<Link href="https://github.com/Wojtazzzz" className="w-fit hover:underline">
				Github
			</Link>

			<button className="w-fit hover:underline" onClick={copyDiscord}>
				Discord
			</button>

			<Link
				href="https://www.linkedin.com/in/marcin-witas-486682202/"
				className="w-fit hover:underline"
			>
				Linkedin
			</Link>
		</InfoSectionContainer>
	);
};
