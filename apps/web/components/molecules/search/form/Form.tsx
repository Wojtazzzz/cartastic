'use client';

import type { Brand } from 'components/organisms/search/Search';
import { MaxPrice } from 'components/atoms/search/maxPrice/MaxPrice';
import { SelectBrand } from 'components/atoms/search/selectBrand/SelectBrand';
import { SelectModel } from 'components/atoms/search/selectModel/SelectModel';
import { MinPrice } from 'components/atoms/search/minPrice/MinPrice';
import { ResetButton } from 'components/atoms/search/resetButton/ResetButton';
import { ResultsCount } from 'components/atoms/search/resultsCount/ResultsCount';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { SubmitButton } from 'components/atoms/search/submitButton/SubmitButton';

type FormProps = {
	brands: Brand[];
};

export const Form = ({ brands }: FormProps) => {
	return (
		<SearchFormContextProvider>
			<div className="flex flex-col items-center justify-center">
				<div className="w-full flex flex-wrap gap-1 sm:gap-0 justify-center my-8 sm:my-12 md:my-14">
					<SelectBrand brands={brands} />
					<SelectModel />
					<MinPrice />
					<MaxPrice />
				</div>

				<div className="flex self-center gap-5">
					<ResetButton />
					<SubmitButton />
				</div>

				<ResultsCount />
			</div>
		</SearchFormContextProvider>
	);
};
