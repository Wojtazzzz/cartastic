import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/renderWithProviders';
import { AppName } from './AppName';

describe('AppName component', () => {
	it('is link with correct path', () => {
		renderWithProviders(<AppName variant="dark" />);

		const link = screen.getByRole('link');

		expect(link).toHaveAttribute('href', '/');
	});

	it('has correct text', () => {
		renderWithProviders(<AppName variant="dark" />);

		const link = screen.getByRole('link');

		expect(link).toHaveTextContent('CARTASTIC');
	});
});
