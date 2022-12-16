import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SubmitButton } from './SubmitButton';

describe('SubmitButton component', () => {
	it('has correct default link', () => {
		renderWithProviders(<SubmitButton />);

		const link = screen.getByRole('link');

		expect(link).toHaveAttribute('href', '/all');
	});
});
