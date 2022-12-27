import { screen } from '@testing-library/dom';
import { LinksSection } from './LinksSection';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('LinksSection component', () => {
	it('has correct header', () => {
		renderWithProviders(<LinksSection />);

		const header = screen.getByRole('heading', { name: 'Links' });

		expect(header).toHaveTextContent('Links');
	});

	it('has correct link to home page', () => {
		renderWithProviders(<LinksSection />);

		const home = screen.getByRole('link', { name: 'Home' });

		expect(home).toHaveTextContent('Home');
		expect(home).toHaveAttribute('href', '/');
	});

	it('has correct link to shortlist page', () => {
		renderWithProviders(<LinksSection />);

		const shortlist = screen.getByRole('link', { name: 'Shortlist' });

		expect(shortlist).toHaveTextContent('Shortlist');
		expect(shortlist).toHaveAttribute('href', '/shortlist');
	});

	it('has correct link to sell car page', () => {
		renderWithProviders(<LinksSection />);

		const sell = screen.getByRole('link', { name: 'Sell own car' });

		expect(sell).toHaveTextContent('Sell own car');
		expect(sell).toHaveAttribute('href', '/sell');
	});
});
