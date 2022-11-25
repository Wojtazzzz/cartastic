import { renderWithProviders } from 'utils/renderWithProviders';
import { SelectBrand } from './SelectBrand';
import brands from '__mocks__/brands.json';
import { screen } from '@testing-library/dom';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import userEvent from '@testing-library/user-event';

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
		renderWithProviders(
			<SearchFormContextProvider>
				<SelectBrand brands={brands} />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Brand');

		await user.selectOptions(input, 'BMW');

		expect(input).toHaveTextContent('BMW');
		expect(input).toHaveValue('1');
	});

	it('set and change brand', async () => {
		renderWithProviders(
			<SearchFormContextProvider>
				<SelectBrand brands={brands} />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Brand');

		await user.selectOptions(input, 'BMW');

		expect(input).toHaveTextContent('BMW');
		expect(input).toHaveValue('1');

		await user.selectOptions(input, 'Opel');

		expect(input).toHaveTextContent('Opel');
		expect(input).toHaveValue('4');
	});
});