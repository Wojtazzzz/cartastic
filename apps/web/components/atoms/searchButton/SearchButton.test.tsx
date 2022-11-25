import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SearchButton } from './SearchButton';

describe('SearchButton component', () => {
	it('has correct default link', () => {
		renderWithProviders(<SearchButton />);

		const link = screen.getByRole('link');

		expect(link).toHaveAttribute('href', '/all');
	});
});
