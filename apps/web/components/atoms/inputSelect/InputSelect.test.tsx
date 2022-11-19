import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import { BRANDS } from 'utils/mockedBrands';
import { renderWithProviders } from 'utils/renderWithProviders';
import { InputSelect } from './InputSelect';

const initialValues = { brand: undefined };
const onSubmit = jest.fn();

describe('InputSelect component', () => {
	const user = userEvent.setup();

	it('has correct initial value', () => {
		renderWithProviders(
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				<InputSelect
					aria-label="Brand"
					name="brand"
					placeholder="Test placeholder"
					options={BRANDS}
				/>
			</Formik>
		);

		const input = screen.getByLabelText('Brand');

		expect(input).toHaveValue('');
	});

	it('has correct accessible name', () => {
		renderWithProviders(
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				<InputSelect
					aria-label="Brand"
					name="brand"
					placeholder="Test placeholder"
					options={BRANDS}
				/>
			</Formik>
		);

		const input = screen.getByLabelText('Brand');

		expect(input).toHaveAccessibleName('Brand');
	});

	it('select one of options', async () => {
		renderWithProviders(
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				<InputSelect
					aria-label="Brand"
					name="brand"
					placeholder="Test placeholder"
					options={BRANDS}
				/>
			</Formik>
		);

		const input = screen.getByLabelText('Brand');
		await user.click(input);

		const brand = screen.getByText('Opel', { selector: 'span' });
		await user.click(brand);

		expect(input).toHaveTextContent('Opel');
	});

	it('can change value', async () => {
		renderWithProviders(
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				<InputSelect
					aria-label="Brand"
					name="brand"
					placeholder="Test placeholder"
					options={BRANDS}
				/>
			</Formik>
		);

		const input = screen.getByLabelText('Brand');
		await user.click(input);

		const firstOption = screen.getByText('Opel', { selector: 'span' });
		await user.click(firstOption);

		expect(input).toHaveTextContent('Opel');

		await user.click(input);

		const secondOption = screen.getByText('Mercedes', { selector: 'span' });
		await user.click(secondOption);

		expect(input).toHaveTextContent('Mercedes');
	});
});
