import { screen } from '@testing-library/dom';
import { Header } from './Header';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('Header component', () => {
	it('has correct accessible name', () => {
		renderWithProviders(<Header text="Hyundai, i30" productionYear={2021} />);

		const heading = screen.getByRole('heading');

		expect(heading).toHaveAccessibleName('Hyundai, i30');
	});

	it('has correct text content', () => {
		renderWithProviders(<Header text="Hyundai, i30" productionYear={2021} />);

		const heading = screen.getByText('Hyundai, i30');

		expect(heading).toBeInTheDocument();
	});

	it('has correct year of production', () => {
		renderWithProviders(<Header text="Hyundai, i30" productionYear={2021} />);

		const year = screen.getByText('2021');

		expect(year).toBeInTheDocument();
	});
});
