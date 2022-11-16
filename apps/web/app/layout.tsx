import type { ReactNode } from 'react';
import '../styles/tailwind.css';
import { Titillium_Web } from '@next/font/google';
import { Header } from 'components/organisms/header/Header';
import { Search } from 'components/organisms/search/Search';
import { SearchForm } from 'components/molecules/searchForm/SearchForm';

const font = Titillium_Web({
	weight: ['400', '600'],
});

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={font.className}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>NextJS app</title>
			</head>

			<body className="pt-[44px] md:pt-[64px]">
				<Header />

				<Search>
					{/* @ts-ignore */}
					<SearchForm />
				</Search>

				{children}
			</body>
		</html>
	);
}
