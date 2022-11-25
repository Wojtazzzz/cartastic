'use client';

import type { Brand } from 'components/organisms/search/Search';
import { SelectBrand } from 'components/atoms/selectBrand/SelectBrand';
import { SelectModel } from 'components/atoms/selectModel/SelectModel';
import { MinPrice } from 'components/atoms/minPrice/MinPrice';
import { MaxPrice } from 'components/atoms/maxPrice/MaxPrice';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { SearchResetButton } from 'components/atoms/searchResetButton/SearchResetButton';
import { SearchButton } from 'components/atoms/searchButton/SearchButton';
import { SearchResultsCount } from 'components/atoms/searchResultsCount/SearchResultsCount';

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

			<div className="flex self-center gap-5">
				<SearchResetButton />
				<SearchButton />
			</div>

			<SearchResultsCount />
		</SearchFormContextProvider>
	);
};
