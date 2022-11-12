import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import type { ReactNode } from 'react';
import { renderWithProviders as render } from 'utils/renderWithProviders';
import { InputNumber } from './InputNumber';

const renderWithProviders = (component: ReactNode) => {
	render(
		<Formik initialValues={{ minPrice: 0 }} onSubmit={console.log}>
			{component}
		</Formik>
	);
};
describe('InputNumber component', () => {
	const user = userEvent.setup();

	it('has correct initial value', () => {
		renderWithProviders(
			<InputNumber aria-label="Min price" name="minPrice" placeholder="Test placeholder" />
		);

		const input = screen.getByLabelText('Min price');

		expect(input).toHaveValue(0);
	});

	it('set own value', async () => {
		renderWithProviders(
			<InputNumber aria-label="Min price" name="minPrice" placeholder="Test placeholder" />
		);

		const input = screen.getByLabelText('Min price');

		await user.type(input, '12');

		expect(input).toHaveValue(12);
	});
});
