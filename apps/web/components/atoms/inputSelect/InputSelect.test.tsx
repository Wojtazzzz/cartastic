import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import type { ReactNode } from 'react';
import { renderWithProviders as render } from 'utils/renderWithProviders';
import { InputSelect } from './InputSelect';

const BRANDS = [
	{ value: 'bmw', name: 'BMW' },
	{ value: 'mazda', name: 'Mazda' },
	{ value: 'citroen', name: 'Citroen' },
	{ value: 'lamborghini', name: 'Lamborghini' },
	{ value: 'opel', name: 'Opel' },
	{ value: 'ford', name: 'Ford' },
];

const renderWithProviders = (component: ReactNode) => {
	render(
		<Formik initialValues={{ brand: '' }} onSubmit={console.log}>
			{component}
		</Formik>
	);
};

describe('InputSelect component', () => {
	const user = userEvent.setup();

	it('has correct initial value', () => {
		renderWithProviders(
			<InputSelect
				aria-label="Brand"
				name="brand"
				placeholder="Test placeholder"
				options={BRANDS}
			/>
		);

		const input = screen.getByLabelText('Brand');

		expect(input).toHaveValue('');
	});

	it('has correct accessible name', () => {
		renderWithProviders(
			<InputSelect
				aria-label="Brand"
				name="brand"
				placeholder="Test placeholder"
				options={BRANDS}
			/>
		);

		const input = screen.getByLabelText('Brand');

		expect(input).toHaveAccessibleName('Brand');
	});
});
