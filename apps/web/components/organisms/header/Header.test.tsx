import { screen } from '@testing-library/react';
import { Header } from './Header';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('Header component', () => {
	it('has app logo', () => {
		renderWithProviders(<Header />);

		const logo = screen.getByRole('heading');

		expect(logo).toHaveTextContent('CARTASTIC');
	});

	it('has correct navigation links', () => {
		renderWithProviders(<Header />);

		const shortlist = screen.getByRole('link', { name: 'Shortlist' });
		const sell = screen.getByRole('link', { name: 'Sell own' });
		const login = screen.getByRole('link', { name: 'Log in' });

		expect(shortlist).toHaveAttribute('href', '/shortlist');
		expect(sell).toHaveAttribute('href', '/sell');
		expect(login).toHaveAttribute('href', '/login');
	});
});
