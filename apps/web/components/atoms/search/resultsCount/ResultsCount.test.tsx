import { screen } from '@testing-library/dom';
import { ResultsCount } from './ResultsCount';
import { mockRequest } from 'utils/mockRequest';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('ResultsCount component', () => {
	it('has correct text', async () => {
		mockRequest({
			path: '/carOffers/count',
			data: 5,
		});

		renderWithProviders(<ResultsCount />);

		const text = await screen.findByText(/Choose one of 5 cars in our offer/);

		expect(text).toBeInTheDocument();
	});

	it('count of offers is in correct format', async () => {
		mockRequest({
			path: '/carOffers/count',
			data: 6545646743,
		});

		renderWithProviders(<ResultsCount />);

		const text = await screen.findByText(/Choose one of 6,545,646,743 cars in our offer/);

		expect(text).toBeInTheDocument();
	});
});
