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
			<div className="w-full flex flex-wrap gap-1 sm:gap-0 justify-center my-8 sm:my-12 md:my-14">
				<SelectBrand brands={brands} />
				<SelectModel />
				<MinPrice />
				<MaxPrice />
			</div>

			<div className="flex self-center gap-5">
				<SearchResetButton />
				<SearchButton />
			</div>

			<SearchResultsCount />
		</SearchFormContextProvider>
	);
};
