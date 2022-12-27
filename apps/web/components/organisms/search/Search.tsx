import { Heading } from 'components/atoms/heading/Heading';
import { Form } from 'components/molecules/search/form/Form';
import { use } from 'react';
import { fetchData } from 'utils/fetchData';
import type { BrandsResponse } from 'utils/types';

export const Search = () => {
	const brands = use(fetchData<BrandsResponse>('/brands'));

	return (
		<section className="w-full h-[450px] flex flex-col items-center justify-center bg-[url('/img/search-bg.jpg')] bg-cover bg-center px-1">
			<Heading
				tag="h2"
				className="text-3xl md:text-4xl lg:text-5xl text-white text-center font-bold"
			>
				WHAT ARE YOU LOOKING FOR?
			</Heading>

			<Form brands={brands} />
		</section>
	);
};
