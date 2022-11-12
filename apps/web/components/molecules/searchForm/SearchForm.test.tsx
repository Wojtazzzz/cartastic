import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SearchForm } from './SearchForm';

const initialValues = {
	brand: '',
	model: '',
	minPrice: 0,
	maxPrice: 0,
};

describe('SearchForm component', () => {
	const user = userEvent.setup();

	it('render correct inputs', () => {
		renderWithProviders(
			<Formik initialValues={initialValues} onSubmit={jest.fn()}>
				<SearchForm />
			</Formik>
		);

		const brandInput = screen.getByLabelText('Brand');
		const modelInput = screen.getByLabelText('Model');
		const minPriceInput = screen.getByLabelText('Min price');
		const maxPriceInput = screen.getByLabelText('Max price');

		expect(brandInput).toBeInTheDocument();
		expect(modelInput).toBeInTheDocument();
		expect(minPriceInput).toBeInTheDocument();
		expect(maxPriceInput).toBeInTheDocument();
	});

	it('inputs have correct default values', () => {
		renderWithProviders(
			<Formik initialValues={initialValues} onSubmit={jest.fn()}>
				<SearchForm />
			</Formik>
		);

		const brandInput = screen.getByLabelText('Brand');
		const modelInput = screen.getByLabelText('Model');
		const minPriceInput = screen.getByLabelText('Min price');
		const maxPriceInput = screen.getByLabelText('Max price');

		expect(brandInput).toHaveValue('');
		expect(modelInput).toHaveValue('');
		expect(minPriceInput).toHaveValue(0);
		expect(maxPriceInput).toHaveValue(0);
	});

	it('fill form with own data', async () => {
		renderWithProviders(
			<Formik initialValues={initialValues} onSubmit={jest.fn()}>
				<SearchForm />
			</Formik>
		);

		const brandInput = screen.getByLabelText('Brand');
		const modelInput = screen.getByLabelText('Model');
		const minPriceInput = screen.getByLabelText('Min price');
		const maxPriceInput = screen.getByLabelText('Max price');

		/* Set brand input value */
		await user.click(brandInput);
		const brand = screen.getByText('Opel', { selector: 'span' });
		await user.click(brand);

		/* Set model input value */
		await user.click(modelInput);
		const model = screen.getByText('Series 3', { selector: 'span' });
		await user.click(model);

		/* Set min price and max price inputs values */
		await user.type(minPriceInput, '151');
		await user.type(maxPriceInput, '276');

		expect(brandInput).toHaveTextContent('Opel');
		expect(modelInput).toHaveTextContent('Series 3');
		expect(minPriceInput).toHaveValue(151);
		expect(maxPriceInput).toHaveValue(276);
	});
});
