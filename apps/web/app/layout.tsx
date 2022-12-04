import type { ReactNode } from 'react';
import '../styles/tailwind.css';
import { Titillium_Web } from '@next/font/google';
import { Header } from 'components/molecules/header/Header';
import { Providers } from './Providers';
import { Search } from 'components/organisms/search/Search';
import { Footer } from 'components/organisms/footer/Footer';

const font = Titillium_Web({
	weight: ['400', '600'],
});

type RootLayoutProps = {
	children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={font.className}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>NextJS app</title>
			</head>

			<body className="pt-[44px] md:pt-[64px]">
				<Providers>
					<Header />

					{/* @ts-ignore */}
					<Search />

					{children}

					<Footer />
				</Providers>
			</body>
		</html>
	);
}
