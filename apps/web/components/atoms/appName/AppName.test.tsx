import { screen } from '@testing-library/react';
import { AppName } from './AppName';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('AppName component', () => {
	it('has correct text', () => {
		renderWithProviders(<AppName />);

		const text = screen.getByText(/CAR/);

		expect(text.parentElement?.textContent).toBe('CARTASTIC');
	});
});
