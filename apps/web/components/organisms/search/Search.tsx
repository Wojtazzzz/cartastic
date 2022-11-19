'use client';

import { Heading } from 'components/atoms/heading/Heading';
import { Text } from 'components/atoms/text/Text';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { SearchControls } from 'components/molecules/searchControls/SearchControls';
import { SearchForm } from 'components/molecules/searchForm/SearchForm';

/* @todo generate types by OpenAPI */
export type Brand = {
	id: number;
	name: string;
};

export type Model = {
	id: number;
	name: string;
	brandId: number;
};

export type SearchFormValues = {
	brand: number | undefined;
	model: number | undefined;
	minPrice: number;
	maxPrice: number;
};

interface SearchProps {
	brands: Brand[];
}

export const Search = ({ brands }: SearchProps) => {
	return (
		<section className="w-full h-[450px] flex flex-col items-center justify-center bg-[url('/img/search-bg.jpg')] bg-cover bg-center">
			<Heading tag="h2" className="text-5xl text-white font-bold">
				WHAT ARE YOU LOOKING FOR?
			</Heading>

			<SearchFormContextProvider>
				<SearchForm brands={brands} />
				<SearchControls />
			</SearchFormContextProvider>

			<Text tag="small" className="text-base text-white font-bold mt-16">
				Choose one of 17,436 cars
			</Text>
		</section>
	);
};
