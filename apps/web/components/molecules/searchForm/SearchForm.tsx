'use client';

import { InputSelect } from 'components/atoms/inputSelect/InputSelect';
import { InputNumber } from 'components/atoms/inputNumber/InputNumber';
import type { Brand } from 'components/organisms/search/Search';
import { useGetModels } from './useGetModels';
import { useSearchFormContext } from 'components/contexts/SearchFormContext';

type SearchFormProps = {
	brands: Brand[];
};

export const SearchForm = ({ brands }: SearchFormProps) => {
	const {
		brand,
		model,
		minPrice,
		maxPrice,
		changeBrand,
		changeModel,
		changeMinPrice,
		changeMaxPrice,
	} = useSearchFormContext();
	const { data } = useGetModels();

	return (
		<div className="flex my-14">
			<InputSelect
				aria-label="Brand"
				name="brand"
				value={brand}
				changeValue={changeBrand}
				placeholder="Brand"
				options={brands}
				className="rounded-l-md"
			/>

			<InputSelect
				aria-label="Model"
				name="model"
				value={model}
				changeValue={changeModel}
				placeholder="Model"
				options={data}
				className="border-l-0"
			/>

			<InputNumber
				aria-label="Min price"
				name="minPrice"
				value={minPrice}
				changeValue={changeMinPrice}
				placeholder="Min price"
				step="500"
				min="0"
				className="border-l-0"
			/>

			<InputNumber
				aria-label="Max price"
				name="maxPrice"
				value={maxPrice}
				changeValue={changeMaxPrice}
				placeholder="Max price"
				step="500"
				min="0"
				className="rounded-r-md border-l-0"
			/>
		</div>
	);
};
