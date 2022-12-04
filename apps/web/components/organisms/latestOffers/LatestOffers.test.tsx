import { screen, within } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { LatestOffers } from './LatestOffers';

describe('LatestOffers component', () => {
	it('has correct header', () => {
		renderWithProviders(<LatestOffers />);

		const header = screen.getByRole('heading', { level: 2 });

		expect(header).toHaveTextContent('Latest Offers');
	});

	it('has list with offers', () => {
		renderWithProviders(<LatestOffers />);

		const list = screen.getByRole('list');

		expect(list).toBeInTheDocument();

		const offers = within(list).getAllByRole('article');

		expect(offers).toHaveLength(10);
	});
});
