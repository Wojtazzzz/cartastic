'use client';

import { Heading } from 'components/atoms/heading/Heading';
import { Text } from 'components/atoms/text/Text';
import { SearchControls } from 'components/molecules/searchControls/SearchControls';
import { Formik, Form } from 'formik';
import type { ReactNode } from 'react';
import { useSearch } from './useSearch';

const initialValues = {
	brand: '',
	model: '',
	minPrice: 0,
	maxPrice: 0,
};

type SearchProps = {
	children: ReactNode;
};

export const Search = ({ children }: SearchProps) => {
	const { search } = useSearch();

	return (
		<Formik initialValues={initialValues} onSubmit={search}>
			<section className="w-full h-[450px] flex flex-col items-center justify-center bg-[url('/img/search-bg.jpg')] bg-cover bg-center">
				<Heading tag="h2" className="text-5xl text-white font-bold">
					WHAT ARE YOU LOOKING FOR?
				</Heading>

				<Form className="flex my-14">{children}</Form>

				<SearchControls />

				<Text tag="small" className="text-base text-white font-bold mt-16">
					Choose one of 17,436 cars
				</Text>
			</section>
		</Formik>
	);
};
