import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { MaxPrice } from './MaxPrice';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('MaxPrice component', () => {
	const user = userEvent.setup();

	it('has correct default value', () => {
		renderWithProviders(
			<SearchFormContextProvider>
				<MaxPrice />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Max price');

		expect(input).toHaveValue(null);
	});

	it('set own value', async () => {
		renderWithProviders(
			<SearchFormContextProvider>
				<MaxPrice />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Max price');

		await user.type(input, '50');

		expect(input).toHaveValue(50);
	});

	it('set and change value', async () => {
		renderWithProviders(
			<SearchFormContextProvider>
				<MaxPrice />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Max price');

		await user.type(input, '50');

		expect(input).toHaveValue(50);

		await user.clear(input);
		await user.type(input, '888');

		expect(input).toHaveValue(888);
	});
});
