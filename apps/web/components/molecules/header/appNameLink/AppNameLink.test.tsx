import { screen } from '@testing-library/dom';
import { AppNameLink } from './AppNameLink';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('AppNameLink component', () => {
	it('has correct accessible name', () => {
		renderWithProviders(<AppNameLink />);

		const heading = screen.getByRole('heading', { level: 1 });

		expect(heading.textContent).toBe('CARTASTIC');
	});

	it('is link to main page', () => {
		renderWithProviders(<AppNameLink />);

		const link = screen.getByRole('link');

		expect(link).toHaveAttribute('href', '/');
	});
});
