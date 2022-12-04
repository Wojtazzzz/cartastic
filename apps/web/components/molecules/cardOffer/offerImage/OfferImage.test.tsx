import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { OfferImage } from './OfferImage';

describe('OfferImage component', () => {
	it('has main image with correct accessible name', () => {
		renderWithProviders(<OfferImage src="/img/offer-image.png" />);

		const image = screen.getByAltText('BMW, Series 3');

		expect(image).toBeInTheDocument();
	});

	it('has count of all images', () => {
		renderWithProviders(<OfferImage src="/img/offer-image.png" />);

		const countOfImages = screen.getByText('999999998');

		expect(countOfImages).toBeInTheDocument();
	});

	it('has button for liking offers', () => {
		renderWithProviders(<OfferImage src="/img/offer-image.png" />);

		const button = screen.getByLabelText('Like offer');

		expect(button).toBeInTheDocument();
	});
});
