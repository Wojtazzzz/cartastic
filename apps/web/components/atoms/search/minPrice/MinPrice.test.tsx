import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { renderWithProviders } from 'utils/renderWithProviders';
import { MinPrice } from './MinPrice';

describe('MinPrice component', () => {
	const user = userEvent.setup();

	it('has correct default value', () => {
		renderWithProviders(
			<SearchFormContextProvider>
				<MinPrice />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Min price');

		expect(input).toHaveValue(null);
	});

	it('set own value', async () => {
		renderWithProviders(
			<SearchFormContextProvider>
				<MinPrice />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Min price');

		await user.type(input, '50');

		expect(input).toHaveValue(50);
	});

	it('set and change value', async () => {
		renderWithProviders(
			<SearchFormContextProvider>
				<MinPrice />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Min price');

		await user.type(input, '50');

		expect(input).toHaveValue(50);

		await user.clear(input);
		await user.type(input, '888');

		expect(input).toHaveValue(888);
	});
});
