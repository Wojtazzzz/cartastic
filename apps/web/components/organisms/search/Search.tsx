import { Heading } from 'components/atoms/heading/Heading';
import { Text } from 'components/atoms/text/Text';
import { SearchForm } from 'components/molecules/searchForm/SearchForm';
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

export const Search = async () => {
	const brands = await fetchData<Brand[]>('http://localhost:8000/brands');

	return (
		<section className="w-full h-[450px] flex flex-col items-center justify-center bg-[url('/img/search-bg.jpg')] bg-cover bg-center">
			<Heading tag="h2" className="text-5xl text-white font-bold">
				WHAT ARE YOU LOOKING FOR?
			</Heading>

			<SearchForm brands={brands} />

			<Text tag="small" className="text-base text-white font-bold mt-16">
				Choose one of 17,436 cars
			</Text>
		</section>
	);
};
