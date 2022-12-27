import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { SelectBrand } from './SelectBrand';
import { renderWithProviders } from 'utils/renderWithProviders';
import brands from '__mocks__/brands.json';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { mockRequest } from 'utils/mockRequest';

describe('SelectBrand component', () => {
	const user = userEvent.setup();

	it('has correct default value', () => {
		renderWithProviders(
			<SearchFormContextProvider>
				<SelectBrand brands={brands} />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Brand');

		expect(input).toHaveTextContent('BRAND');
		expect(input).toHaveValue('0');
	});

	it('set brand', async () => {
		mockRequest({
			path: '/brands/15/models',
		});

		renderWithProviders(
			<SearchFormContextProvider>
				<SelectBrand brands={brands} />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Brand');

		await user.selectOptions(input, 'BMW');

		expect(input).toHaveTextContent('BMW');
		expect(input).toHaveValue('15');
	});

	it('set and change brand', async () => {
		mockRequest({
			path: '/brands/15/models',
		});

		renderWithProviders(
			<SearchFormContextProvider>
				<SelectBrand brands={brands} />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Brand');

		await user.selectOptions(input, 'BMW');

		expect(input).toHaveTextContent('BMW');
		expect(input).toHaveValue('15');

		mockRequest({
			path: '/brands/91/models',
		});

		await user.selectOptions(input, 'Opel');

		expect(input).toHaveTextContent('Opel');
		expect(input).toHaveValue('91');
	});
});
