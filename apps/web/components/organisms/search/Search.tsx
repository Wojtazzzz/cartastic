import { Heading } from 'components/atoms/heading/Heading';
import { SearchForm } from 'components/molecules/searchForm/SearchForm';
import { use } from 'react';
import { fetchData } from 'utils/fetchData';

/* TODO: generate types by OpenAPI */
export type Brand = {
	id: number;
	name: string;
};

export type Model = {
	id: number;
	name: string;
	brandId: number;
};

export const Search = () => {
	const brands = use(fetchData<Brand[]>('/brands'));

	return (
		<section className="w-full h-[450px] flex flex-col items-center justify-center bg-[url('/img/search-bg.jpg')] bg-cover bg-center px-1">
			<Heading
				tag="h2"
				className="text-3xl md:text-4xl lg:text-5xl text-white text-center font-bold"
			>
				WHAT ARE YOU LOOKING FOR?
			</Heading>

			<SearchForm brands={brands} />
		</section>
	);
};
