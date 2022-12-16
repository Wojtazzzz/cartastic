import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import brands from '__mocks__/brands.json';
import BMWModels from '__mocks__/models/bmw.json';
import MercedesModels from '__mocks__/models/mercedes.json';
import { mockRequest } from 'utils/mockRequest';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SearchForm } from './SearchForm';

describe('SearchForm component', () => {
	const user = userEvent.setup();

	beforeEach(() => {
		mockRequest({
			path: '/cars/count',
			data: 4,
		});
	});

	it('render correct inputs', () => {
		renderWithProviders(<SearchForm brands={brands} />);

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
		renderWithProviders(<SearchForm brands={brands} />);

		const brandInput = screen.getByLabelText('Brand');
		const modelInput = screen.getByLabelText('Model');
		const minPriceInput = screen.getByLabelText('Min price');
		const maxPriceInput = screen.getByLabelText('Max price');

		expect(brandInput).toHaveValue('0');
		expect(brandInput).toHaveTextContent('BRAND');
		expect(modelInput).toHaveValue('0');
		expect(modelInput).toHaveTextContent('MODEL');
		expect(minPriceInput).toHaveValue(null);
		expect(maxPriceInput).toHaveValue(null);
	});

	it('fill form with custom data', async () => {
		mockRequest({
			path: '/brands/1/models',
			data: BMWModels,
		});

		renderWithProviders(<SearchForm brands={brands} />);

		const brandInput = screen.getByLabelText('Brand', { selector: 'select' });
		const modelInput = screen.getByLabelText('Model', { selector: 'select' });
		const minPriceInput = screen.getByLabelText('Min price');
		const maxPriceInput = screen.getByLabelText('Max price');

		/* Set brand input value */
		await user.selectOptions(brandInput, 'BMW');

		/* Set model input value */
		await waitFor(async () => {
			await user.selectOptions(modelInput, 'Series 6');
		});

		/* Set min price and max price inputs values */
		await user.type(minPriceInput, '151');
		await user.type(maxPriceInput, '276');

		expect(brandInput).toHaveTextContent('BMW');
		expect(brandInput).toHaveValue('1');
		expect(modelInput).toHaveTextContent('Series 6');
		expect(modelInput).toHaveValue('6');
		expect(minPriceInput).toHaveValue(151);
		expect(maxPriceInput).toHaveValue(276);
	});

	it('multiple change brands and models', async () => {
		mockRequest({
			path: '/brands/1/models',
			data: BMWModels,
		});

		renderWithProviders(<SearchForm brands={brands} />);

		const brandInput = screen.getByLabelText('Brand');
		const modelInput = screen.getByLabelText('Model');

		/* Set brand input value */
		await user.selectOptions(brandInput, 'BMW');

		/* Set model input value */
		await waitFor(async () => {
			await user.selectOptions(modelInput, 'Series 3');
		});

		expect(brandInput).toHaveTextContent('BMW');
		expect(brandInput).toHaveValue('1');
		expect(modelInput).toHaveTextContent('Series 3');
		expect(modelInput).toHaveValue('3');

		/* Change model input value */
		await waitFor(async () => {
			await user.selectOptions(modelInput, 'Series 7');
		});

		expect(modelInput).toHaveTextContent('Series 7');
		expect(modelInput).toHaveValue('7');

		mockRequest({
			path: '/brands/3/models',
			data: MercedesModels,
		});

		/* Change brand input value */
		await user.selectOptions(brandInput, 'Mercedes');

		expect(brandInput).toHaveTextContent('Mercedes');
		expect(brandInput).toHaveValue('3');
		expect(modelInput).not.toHaveTextContent('Series 7');
		expect(modelInput).not.toHaveValue('7');
		expect(modelInput).toHaveTextContent('MODEL');
		expect(modelInput).toHaveValue('0');

		/* Model for new brand input value */
		await waitFor(async () => {
			await user.selectOptions(modelInput, 'Citan');
		});

		expect(brandInput).toHaveTextContent('Mercedes');
		expect(brandInput).toHaveValue('3');
		expect(modelInput).toHaveTextContent('Citan');
		expect(modelInput).toHaveValue('18');

		/* Change model for new brand input value */
		await waitFor(async () => {
			await user.selectOptions(modelInput, 'CLA');
		});

		expect(brandInput).toHaveTextContent('Mercedes');
		expect(brandInput).toHaveValue('3');
		expect(modelInput).toHaveTextContent('CLA');
		expect(modelInput).toHaveValue('19');
	});

	it('reset values', async () => {
		mockRequest({
			path: '/brands/1/models',
			data: BMWModels,
		});

		renderWithProviders(<SearchForm brands={brands} />);

		const brandInput = screen.getByLabelText('Brand', { selector: 'select' });
		const modelInput = screen.getByLabelText('Model', { selector: 'select' });
		const minPriceInput = screen.getByLabelText('Min price');
		const maxPriceInput = screen.getByLabelText('Max price');

		/* Set brand input value */
		await user.selectOptions(brandInput, 'BMW');

		/* Set model input value */
		await waitFor(async () => {
			await user.selectOptions(modelInput, 'Series 6');
		});

		/* Set min price and max price inputs values */
		await user.type(minPriceInput, '151');
		await user.type(maxPriceInput, '276');

		expect(brandInput).toHaveTextContent('BMW');
		expect(brandInput).toHaveValue('1');
		expect(modelInput).toHaveTextContent('Series 6');
		expect(modelInput).toHaveValue('6');
		expect(minPriceInput).toHaveValue(151);
		expect(maxPriceInput).toHaveValue(276);

		const resetButton = screen.getByLabelText('Reset', { selector: 'button' });
		await user.click(resetButton);

		expect(brandInput).toHaveTextContent('BRAND');
		expect(brandInput).toHaveValue('0');
		expect(modelInput).toHaveTextContent('MODEL');
		expect(modelInput).toHaveValue('0');
		expect(minPriceInput).toHaveValue(0);
		expect(maxPriceInput).toHaveValue(0);
	});
});
