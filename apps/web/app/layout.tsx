import type { ReactNode } from 'react';
import '../styles/tailwind.css';
import { Titillium_Web } from '@next/font/google';
import { Header } from 'components/organisms/header/Header';
import { Providers } from './Providers';
import { Brand, Search } from 'components/organisms/searchSection/SearchSection';
import { fetchData } from 'utils/fetchData';

const font = Titillium_Web({
	weight: ['400', '600'],
});

type RootLayoutProps = {
	children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
	const brands = await fetchData<Brand[]>('http://localhost:8000/brands');

	return (
		<html lang="en" className={font.className}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>NextJS app</title>
			</head>

			<body className="pt-[44px] md:pt-[64px]">
				<Providers>
					<Header />

					<Search brands={brands} />

					{children}
				</Providers>
			</body>
		</html>
	);
}
