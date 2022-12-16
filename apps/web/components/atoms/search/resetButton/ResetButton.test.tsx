import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { ResetButton } from './ResetButton';

describe('ResetButton component', () => {
	it('has correct title', () => {
		renderWithProviders(<ResetButton />);

		const button = screen.getByRole('button');

		expect(button).toHaveTextContent('Reset');
	});
});
