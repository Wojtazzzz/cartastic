import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/renderWithProviders';
import { Link } from './Link';

describe('Link component', () => {
	it('has correct title', () => {
		renderWithProviders(<Link href="/test">Test Link</Link>);

		const title = screen.getByText('Test Link');

		expect(title).toBeInTheDocument();
	});

	it('has correct href', () => {
		renderWithProviders(<Link href="/test">Test Link</Link>);

		const link = screen.getByRole('link');

		expect(link).toHaveAttribute('href', '/test');
	});
});
