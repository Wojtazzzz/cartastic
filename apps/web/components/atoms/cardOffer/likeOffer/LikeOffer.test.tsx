import { screen, within } from '@testing-library/dom';
import { LikeOffer } from './LikeOffer';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('LikeOffer component', () => {
	it('has correct accessible name', () => {
		renderWithProviders(<LikeOffer />);

		const button = screen.getByRole('button');

		expect(button).toHaveAccessibleName('Like offer');
	});

	it('has image inside', () => {
		renderWithProviders(<LikeOffer />);

		const button = screen.getByRole('button');

		const image = within(button).getByRole('img');

		expect(image).toBeInTheDocument();
	});
});
