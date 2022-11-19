import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SearchControls } from './SearchControls';

describe('SearchControls component', () => {
	it('render reset and search buttons', () => {
		renderWithProviders(<SearchControls />);

		const resetButton = screen.getByLabelText('Reset');
		const searchButton = screen.getByText('Search');

		expect(resetButton).toBeInTheDocument();
		expect(searchButton).toBeInTheDocument();
	});

	it('reset button has correct accessible name', () => {
		renderWithProviders(<SearchControls />);

		const resetButton = screen.getByLabelText('Reset');

		expect(resetButton).toHaveAccessibleName('Reset');
	});
});
