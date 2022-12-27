import { screen } from '@testing-library/dom';
import { SubmitButton } from './SubmitButton';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('SubmitButton component', () => {
	it('has correct default link', () => {
		renderWithProviders(<SubmitButton />);

		const link = screen.getByRole('link');

		expect(link).toHaveAttribute('href', '/all');
	});
});
