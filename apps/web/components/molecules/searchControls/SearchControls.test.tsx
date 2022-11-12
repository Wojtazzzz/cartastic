import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import { userAgent } from 'next/server';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SearchControls } from './SearchControls';

describe('SearchControls component', () => {
	const user = userEvent.setup();

	it('render reset and search buttons', () => {
		renderWithProviders(
			<Formik initialValues={{}} onSubmit={console.log}>
				<SearchControls />
			</Formik>
		);

		const resetButton = screen.getByLabelText('Reset');
		const searchButton = screen.getByLabelText('Search');

		expect(resetButton).toBeInTheDocument();
		expect(searchButton).toBeInTheDocument();
	});

	it('buttons has correct accessible names', () => {
		renderWithProviders(
			<Formik initialValues={{}} onSubmit={console.log}>
				<SearchControls />
			</Formik>
		);

		const resetButton = screen.getByLabelText('Reset');
		const searchButton = screen.getByLabelText('Search');

		expect(resetButton).toHaveAccessibleName('Reset');
		expect(searchButton).toHaveAccessibleName('Search');
	});

	it('execute reset fn by click on reset button', async () => {
		const reset = jest.fn();

		renderWithProviders(
			<Formik initialValues={{}} onSubmit={console.log} onReset={reset}>
				<SearchControls />
			</Formik>
		);

		const resetButton = screen.getByLabelText('Reset');

		await user.click(resetButton);

		expect(reset).toHaveBeenCalledTimes(1);
	});

	it('execute submit fn by click on search button', async () => {
		const search = jest.fn();

		renderWithProviders(
			<Formik initialValues={{}} onSubmit={search}>
				<SearchControls />
			</Formik>
		);

		const searchButton = screen.getByLabelText('Search');

		await user.click(searchButton);

		expect(search).toHaveBeenCalledTimes(1);
	});
});
