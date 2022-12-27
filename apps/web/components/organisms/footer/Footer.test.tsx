import { screen } from '@testing-library/dom';
import { Footer } from './Footer';
import { APP_NAME } from 'utils/env';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('Footer component', () => {
	it('has correct accessible name', () => {
		renderWithProviders(<Footer />);

		const footer = screen.getByRole('contentinfo');

		expect(footer).toBeInTheDocument();
	});

	it('has info section', () => {
		renderWithProviders(<Footer />);

		const infoSection = screen.getByTestId('app-name');

		expect(infoSection).toBeInTheDocument();
	});

	it('has links section', () => {
		renderWithProviders(<Footer />);

		const linksSection = screen.getByRole('heading', { name: 'Links' });

		expect(linksSection).toBeInTheDocument();
	});

	it('has contact section', () => {
		renderWithProviders(<Footer />);

		const contactSection = screen.getByRole('heading', { name: 'Contact' });

		expect(contactSection).toBeInTheDocument();
	});

	it('has copyrights info', () => {
		const year = new Date().getFullYear();

		const text = `© Copyright ${year} ${APP_NAME}. All rights reserved.`;

		renderWithProviders(<Footer />);

		const copyrights = screen.getByText(text);

		expect(copyrights).toBeInTheDocument();
	});
});
