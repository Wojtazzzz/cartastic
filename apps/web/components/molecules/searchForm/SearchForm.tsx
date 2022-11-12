import { InputSelect } from 'components/atoms/inputSelect/InputSelect';
import { InputNumber } from 'components/atoms/inputNumber/InputNumber';
import { Form } from 'formik';

export type SearchFormValues = {
	brand: string;
	model: string;
	minPrice: number;
	maxPrice: number;
};

export const SearchForm = () => {
	return (
		<Form className="flex">
			<InputSelect
				aria-label="Brand"
				name="brand"
				placeholder="Brand"
				options={BRANDS}
				className="rounded-l-md"
			/>

			<InputSelect
				aria-label="Model"
				name="model"
				placeholder="Model"
				options={MODELS}
				className="border-l-0"
			/>

			<InputNumber
				aria-label="Min price"
				name="minPrice"
				placeholder="Min price"
				step="500"
				min="0"
				className="border-l-0"
			/>

			<InputNumber
				aria-label="Max price"
				name="maxPrice"
				placeholder="Max price"
				step="500"
				min="0"
				className="rounded-r-md border-l-0"
			/>
		</Form>
	);
};

const BRANDS = [
	{ value: 'bmw', name: 'BMW' },
	{ value: 'mazda', name: 'Mazda' },
	{ value: 'citroen', name: 'Citroen' },
	{ value: 'lamborghini', name: 'Lamborghini' },
	{ value: 'opel', name: 'Opel' },
	{ value: 'ford', name: 'Ford' },
];

const MODELS = [
	{ value: 'series 1', name: 'Series 1' },
	{ value: 'series 2', name: 'Series 2' },
	{ value: 'series 3', name: 'Series 3' },
	{ value: 'series 4', name: 'Series 4' },
	{ value: 'series 5', name: 'Series 5' },
	{ value: 'series 6', name: 'Series 6' },
	{ value: 'series 7', name: 'Series 7' },
	{ value: 'series 8', name: 'Series 8' },
];
