import { screen } from '@testing-library/dom';
import { ResetButton } from './ResetButton';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('ResetButton component', () => {
	it('has correct title', () => {
		renderWithProviders(<ResetButton />);

		const button = screen.getByRole('button');

		expect(button).toHaveTextContent('Reset');
	});
});
