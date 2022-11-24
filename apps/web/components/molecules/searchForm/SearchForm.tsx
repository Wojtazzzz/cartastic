'use client';

import type { Brand } from 'components/organisms/search/Search';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { SelectBrand } from 'components/atoms/selectBrand/SelectBrand';
import { SelectModel } from 'components/atoms/selectModel/SelectModel';
import { SearchControls } from '../searchControls/SearchControls';
import { MinPrice } from 'components/atoms/minPrice/MinPrice';
import { MaxPrice } from 'components/atoms/maxPrice/MaxPrice';

type SearchFormProps = {
	brands: Brand[];
};

export const SearchForm = ({ brands }: SearchFormProps) => {
	return (
		<SearchFormContextProvider>
			<div className="flex my-14">
				<SelectBrand brands={brands} className="rounded-l-md" />
				<SelectModel className="border-l-0" />
				<MinPrice className="border-l-0" />
				<MaxPrice className="rounded-r-md border-l-0" />
			</div>

			<SearchControls />
		</SearchFormContextProvider>
	);
};
