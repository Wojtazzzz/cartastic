import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import brands from '__mocks__/brands.json';
import { renderWithProviders } from 'utils/renderWithProviders';
import { Search } from './Search';
import BMWModels from '__mocks__/models/bmw.json';
import { mockRequest } from 'utils/mockRequest';

describe('Search component', () => {
	const user = userEvent.setup();

	it('has head title', () => {
		renderWithProviders(<Search brands={brands} />);

		const title = screen.getByText('WHAT ARE YOU LOOKING FOR?');

		expect(title).toBeInTheDocument();
	});

	it('has form for searching vehicles', () => {
		renderWithProviders(<Search brands={brands} />);

		const brandInput = screen.getByLabelText('Brand');
		const modelInput = screen.getByLabelText('Model');
		const minPriceInput = screen.getByLabelText('Min price');
		const maxPriceInput = screen.getByLabelText('Max price');

		expect(brandInput).toBeInTheDocument();
		expect(modelInput).toBeInTheDocument();
		expect(minPriceInput).toBeInTheDocument();
		expect(maxPriceInput).toBeInTheDocument();
	});

	it('has controls for form', () => {
		renderWithProviders(<Search brands={brands} />);

		const resetButton = screen.getByRole('button', { name: 'Reset' });
		const searchButton = screen.getByRole('link', { name: 'Search' });

		expect(resetButton).toBeInTheDocument();
		expect(searchButton).toBeInTheDocument();
	});

	it('search button generate link to all offers', () => {
		renderWithProviders(<Search brands={brands} />);

		const searchButton = screen.getByRole('link', { name: 'Search' });

		expect(searchButton).toHaveAttribute('href', '/all');
	});

	it('search button generate link to offers for specific brand', async () => {
		mockRequest({
			path: '/brands/1/models',
			data: BMWModels,
		});

		renderWithProviders(<Search brands={brands} />);

		const brandInput = screen.getByLabelText('Brand');

		/* Set brand input value */
		await user.click(brandInput);
		const brand = screen.getByText('BMW', { selector: 'span' });
		await user.click(brand);

		const searchButton = screen.getByRole('link', { name: 'Search' });

		expect(searchButton).toHaveAttribute('href', '/1');
	});

	it('search button generate link to offers for specific model', async () => {
		mockRequest({
			path: '/brands/1/models',
			data: BMWModels,
		});

		renderWithProviders(<Search brands={brands} />);

		const brandInput = screen.getByLabelText('Brand');
		const modelInput = screen.getByLabelText('Model');

		/* Set brand input value */
		await user.click(brandInput);
		const brand = screen.getByText('BMW', { selector: 'span' });
		await user.click(brand);

		/* Set model input value */
		await user.click(modelInput);
		const model = await screen.findByText('Series 7', { selector: 'span' });
		await user.click(model);

		const searchButton = screen.getByRole('link', { name: 'Search' });

		expect(searchButton).toHaveAttribute('href', '/1/7');
	});

	// TODO: reset is bugged
	// it('reset form by click on reset button', async () => {
	// 	mockRequest({
	// 		path: '/brands/1/models',
	// 		data: BMWModels,
	// 	});

	// 	renderWithProviders(<Search brands={brands} />);

	// 	const brandInput = screen.getByLabelText('Brand');
	// 	const modelInput = screen.getByLabelText('Model');
	// 	const minPriceInput = screen.getByLabelText('Min price');
	// 	const maxPriceInput = screen.getByLabelText('Max price');

	// 	/* Set brand input value */
	// 	await user.click(brandInput);
	// 	const brand = screen.getByText('BMW', { selector: 'span' });
	// 	await user.click(brand);

	// 	/* Set model input value */
	// 	await user.click(modelInput);
	// 	const model = await screen.findByText('A2', { selector: 'span' });
	// 	await user.click(model);

	// 	/* Set min price and max price inputs values */
	// 	await user.type(minPriceInput, '151');
	// 	await user.type(maxPriceInput, '276');

	// 	expect(brandInput).toHaveTextContent('BMW');
	// 	expect(modelInput).toHaveTextContent('A2');
	// 	expect(minPriceInput).toHaveValue(151);
	// 	expect(maxPriceInput).toHaveValue(276);

	// 	const resetButton = screen.getByRole('button', { name: 'Reset' });

	// 	await user.click(resetButton);

	// 	expect(brandInput).not.toHaveTextContent('BMW');
	// 	expect(modelInput).not.toHaveTextContent('A2');
	// 	expect(minPriceInput).toHaveValue(0);
	// 	expect(maxPriceInput).toHaveValue(0);
	// });
});
