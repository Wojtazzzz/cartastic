import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'utils/renderWithProviders';
import { Search } from './Search';

describe('Search component', () => {
	const user = userEvent.setup();

	it('has head title', () => {
		renderWithProviders(<Search />);

		const title = screen.getByText('WHAT ARE YOU LOOKING FOR?');

		expect(title).toBeInTheDocument();
	});

	it('has form for searching vehicles', () => {
		renderWithProviders(<Search />);

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
		renderWithProviders(<Search />);

		const resetButton = screen.getByRole('button', { name: 'Reset' });
		const searchButton = screen.getByRole('button', { name: 'Search' });

		expect(resetButton).toBeInTheDocument();
		expect(searchButton).toBeInTheDocument();
	});

	it('reset form by click on reset button', async () => {
		renderWithProviders(<Search />);

		const brandInput = screen.getByLabelText('Brand');
		const modelInput = screen.getByLabelText('Model');
		const minPriceInput = screen.getByLabelText('Min price');
		const maxPriceInput = screen.getByLabelText('Max price');

		/* Set brand input value */
		await user.click(brandInput);
		const brand = screen.getByText('Citroen', { selector: 'span' });
		await user.click(brand);

		/* Set model input value */
		await user.click(modelInput);
		const model = screen.getByText('Series 7', { selector: 'span' });
		await user.click(model);

		/* Set min price and max price inputs values */
		await user.type(minPriceInput, '151');
		await user.type(maxPriceInput, '276');

		expect(brandInput).toHaveTextContent('Citroen');
		expect(modelInput).toHaveTextContent('Series 7');
		expect(minPriceInput).toHaveValue(151);
		expect(maxPriceInput).toHaveValue(276);

		const resetButton = screen.getByRole('button', { name: 'Reset' });

		await user.click(resetButton);

		expect(brandInput).not.toHaveTextContent('Citroen');
		expect(modelInput).not.toHaveTextContent('Series 7');
		expect(minPriceInput).toHaveValue(0);
		expect(maxPriceInput).toHaveValue(0);
	});
});
