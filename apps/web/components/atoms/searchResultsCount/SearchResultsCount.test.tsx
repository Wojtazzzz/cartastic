import { screen } from '@testing-library/dom';
import { mockRequest } from 'utils/mockRequest';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SearchResultsCount } from './SearchResultsCount';

describe('SearchResultsCount component', () => {
	it('has correct text', async () => {
		mockRequest({
			path: '/cars/count',
			data: 5,
		});

		renderWithProviders(<SearchResultsCount />);

		const text = await screen.findByText(/Choose one of 5 cars in our offer/);

		expect(text).toBeInTheDocument();
	});

	it('count of offers is in correct format', async () => {
		mockRequest({
			path: '/cars/count',
			data: 6545646743,
		});

		renderWithProviders(<SearchResultsCount />);

		const text = await screen.findByText(/Choose one of 6,545,646,743 cars in our offer/);

		expect(text).toBeInTheDocument();
	});
});
