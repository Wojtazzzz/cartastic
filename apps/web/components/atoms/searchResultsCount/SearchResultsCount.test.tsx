import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SearchResultsCount } from './SearchResultsCount';

describe('SearchResultsCount component', () => {
	it('has correct text', () => {
		renderWithProviders(<SearchResultsCount />);

		const text = screen.getByText('Choose one of 17,436 cars');

		expect(text).toBeInTheDocument();
	});
});
