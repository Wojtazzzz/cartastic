import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BRANDS } from 'utils/mockedBrands';
import MODELS from '__mocks__/models.json';
import { mockRequest } from 'utils/mockRequest';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SearchForm } from './SearchForm';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';

describe('SearchForm component', () => {
	const user = userEvent.setup();

	it('render correct inputs', () => {
		renderWithProviders(
			<SearchFormContextProvider>
				<SearchForm brands={BRANDS} />
			</SearchFormContextProvider>
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
			<SearchFormContextProvider>
				<SearchForm brands={BRANDS} />
			</SearchFormContextProvider>
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

	it('fill form with custom data', async () => {
		mockRequest({
			path: '/brands/1/models',
			data: MODELS,
		});

		renderWithProviders(
			<SearchFormContextProvider>
				<SearchForm brands={BRANDS} />
			</SearchFormContextProvider>
		);

		const brandInput = screen.getByLabelText('Brand');
		const modelInput = screen.getByLabelText('Model');
		const minPriceInput = screen.getByLabelText('Min price');
		const maxPriceInput = screen.getByLabelText('Max price');

		/* Set brand input value */
		await user.click(brandInput);
		const brand = screen.getByText('BMW', { selector: 'span' });
		await user.click(brand);

		/* Set model input value */
		await user.click(modelInput);
		const model = await screen.findByText('A2', { selector: 'span' });
		await user.click(model);

		/* Set min price and max price inputs values */
		await user.type(minPriceInput, '151');
		await user.type(maxPriceInput, '276');

		expect(brandInput).toHaveTextContent('BMW');
		expect(modelInput).toHaveTextContent('A2');
		expect(minPriceInput).toHaveValue(151);
		expect(maxPriceInput).toHaveValue(276);
	});
});
