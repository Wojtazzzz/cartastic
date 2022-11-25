import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SearchResultsCount } from './SearchResultsCount';

describe('SearchResultsCount component', () => {
	it('has correct text', () => {
		renderWithProviders(<SearchResultsCount />);

		const text1 = screen.getByText(/Choose one of/);
		const text2 = screen.getByText(/cars in our offer/);

		expect(text1).toBeInTheDocument();
		expect(text2).toBeInTheDocument();
	});
});
