import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { ContactSection } from './ContactSection';

describe('ContactSection component', () => {
	it('has correct header', () => {
		renderWithProviders(<ContactSection />);

		const header = screen.getByRole('heading');

		expect(header).toHaveTextContent('Contact');
	});

	it('has correct email contact', () => {
		renderWithProviders(<ContactSection />);

		const email = screen.getByRole('link', { name: 'Email' });

		expect(email).toHaveTextContent('Email');
		expect(email).toHaveAttribute('href', 'mailto: marcin.witas72@gmail.com');
	});

	it('has correct github contact', () => {
		renderWithProviders(<ContactSection />);

		const github = screen.getByRole('link', { name: 'Github' });

		expect(github).toHaveTextContent('Github');
		expect(github).toHaveAttribute('href', 'https://github.com/Wojtazzzz');
	});

	it('has correct discord contact', () => {
		renderWithProviders(<ContactSection />);

		const discord = screen.getByRole('button', { name: 'Discord' });

		expect(discord).toHaveTextContent('Discord');
	});

	it('has correct linkedin contact', () => {
		renderWithProviders(<ContactSection />);

		const linkedin = screen.getByRole('link', { name: 'Linkedin' });

		expect(linkedin).toHaveTextContent('Linkedin');
		expect(linkedin).toHaveAttribute(
			'href',
			'https://www.linkedin.com/in/marcin-witas-486682202/'
		);
	});
});
