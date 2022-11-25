import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SearchResetButton } from './SearchResetButton';

describe('SearchResetButton component', () => {
	it('has correct title', () => {
		renderWithProviders(<SearchResetButton />);

		const button = screen.getByRole('button');

		expect(button).toHaveTextContent('Reset');
	});
});
