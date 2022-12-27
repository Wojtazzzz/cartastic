'use client';

import Link from 'next/link';
import { copyDiscordToClipboard } from './copyDiscordToClipboard';
import { InfoSectionContainer } from 'components/atoms/footer/infoSectionContainer/InfoSectionContainer';
import { Heading } from 'components/atoms/heading/Heading';

export const ContactSection = () => {
	const copyDiscord = copyDiscordToClipboard();

	const handleCopyToClipboard = () => void copyDiscord();

	return (
		<InfoSectionContainer>
			<Heading tag="h2" className="font-bold">
				Contact
			</Heading>

			<Link href="mailto: marcin.witas72@gmail.com" className="w-fit hover:underline text-sm">
				Email
			</Link>

			<Link href="https://github.com/Wojtazzzz" className="w-fit hover:underline text-sm">
				Github
			</Link>

			<button className="w-fit hover:underline text-sm" onClick={handleCopyToClipboard}>
				Discord
			</button>

			<Link
				href="https://www.linkedin.com/in/marcin-witas-486682202/"
				className="w-fit hover:underline text-sm"
			>
				Linkedin
			</Link>
		</InfoSectionContainer>
	);
};
