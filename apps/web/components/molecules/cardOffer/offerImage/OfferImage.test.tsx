import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { OfferImage } from './OfferImage';

describe('OfferImage component', () => {
	it('has main image with correct accessible name', () => {
		renderWithProviders(
			<OfferImage src="/img/offer-image.png" imagesCount={2} alt="Example Alt" />
		);

		const image = screen.getByAltText('Example Alt');

		expect(image).toBeInTheDocument();
	});

	it('has count of all images', () => {
		renderWithProviders(
			<OfferImage src="/img/offer-image.png" imagesCount={434343} alt="Example Alt" />
		);

		const countOfImages = screen.getByText('434343');

		expect(countOfImages).toBeInTheDocument();
	});

	it('has button for liking offers', () => {
		renderWithProviders(
			<OfferImage src="/img/offer-image.png" imagesCount={2} alt="Example Alt" />
		);

		const button = screen.getByLabelText('Like offer');

		expect(button).toBeInTheDocument();
	});
});
