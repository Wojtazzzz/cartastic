import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/renderWithProviders';
import { AppName } from './AppName';

describe('AppName component', () => {
	it('has correct text', () => {
		renderWithProviders(<AppName />);

		const text = screen.getByText(/CAR/);

		expect(text.parentElement?.textContent).toBe('CARTASTIC');
	});
});
