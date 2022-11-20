import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BRANDS } from 'utils/mockedBrands';
import MODELS from '__mocks__/models.json';
import { mockRequest } from 'utils/mockRequest';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SearchForm } from './SearchForm';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';

const MercedesModels = MODELS.filter((model) => model.brandId === 3);
const BMWModels = MODELS.filter((model) => model.brandId === 1);

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
			data: BMWModels,
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
		const model = await screen.findByText('Series 6', { selector: 'span' });
		await user.click(model);

		/* Set min price and max price inputs values */
		await user.type(minPriceInput, '151');
		await user.type(maxPriceInput, '276');

		expect(brandInput).toHaveTextContent('BMW');
		expect(modelInput).toHaveTextContent('Series 6');
		expect(minPriceInput).toHaveValue(151);
		expect(maxPriceInput).toHaveValue(276);
	});

	it('multiple change brands and models', async () => {
		mockRequest({
			path: '/brands/1/models',
			data: BMWModels,
		});

		renderWithProviders(
			<SearchFormContextProvider>
				<SearchForm brands={BRANDS} />
			</SearchFormContextProvider>
		);

		const brandInput = screen.getByLabelText('Brand');
		const modelInput = screen.getByLabelText('Model');

		/* Set brand input value */
		await user.click(brandInput);
		const bmw = screen.getByText('BMW', { selector: 'span' });
		await user.click(bmw);

		/* Set model input value */
		await user.click(modelInput);
		const Series3 = await screen.findByText('Series 3', { selector: 'span' });
		await user.click(Series3);

		expect(brandInput).toHaveTextContent('BMW');
		expect(modelInput).toHaveTextContent('Series 3');

		/* Change model input value */
		await user.click(modelInput);
		const series7 = await screen.findByText('Series 7', { selector: 'span' });
		await user.click(series7);

		expect(modelInput).toHaveTextContent('Series 7');

		mockRequest({
			path: '/brands/3/models',
			data: MercedesModels,
		});

		/* Change brand input value */
		await user.click(brandInput);
		const mercedes = screen.getByText('Mercedes', { selector: 'span' });
		await user.click(mercedes);

		expect(brandInput).toHaveTextContent('Mercedes');
		expect(modelInput).not.toHaveTextContent('Series 7'); // TODO: after change brand, model input should has placeholder value

		/* Model for new brand input value */
		await user.click(modelInput);
		const citan = await screen.findByText('Citan', { selector: 'span' });
		await user.click(citan);

		expect(brandInput).toHaveTextContent('Mercedes');
		expect(modelInput).toHaveTextContent('Citan');

		/* Change model for new brand input value */
		await user.click(modelInput);
		const cla = await screen.findByText('CLA', { selector: 'span' });
		await user.click(cla);

		expect(brandInput).toHaveTextContent('Mercedes');
		expect(modelInput).toHaveTextContent('CLA');
	});
});
