import { screen } from '@testing-library/dom';
import { Nav } from './Nav';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('Nav component', () => {
	it('has all links with correct paths', () => {
		renderWithProviders(<Nav />);

		const shortlist = screen.getByRole('link', { name: 'Shortlist' });
		const sell = screen.getByRole('link', { name: 'Sell own' });
		const login = screen.getByRole('link', { name: 'Log in' });

		expect(shortlist).toHaveAttribute('href', '/shortlist');
		expect(sell).toHaveAttribute('href', '/sell');
		expect(login).toHaveAttribute('href', '/login');
	});
});
