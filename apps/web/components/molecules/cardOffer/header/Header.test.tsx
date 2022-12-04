import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { Header } from './Header';

describe('Header component', () => {
	it('has correct accessible name', () => {
		renderWithProviders(<Header brand="Hyundai" model="i30" productionDate="2021" />);

		const heading = screen.getByRole('heading');

		expect(heading).toHaveAccessibleName('Hyundai, i30');
	});

	it('has correct text content', () => {
		renderWithProviders(<Header brand="Hyundai" model="i30" productionDate="2021" />);

		const heading = screen.getByText('Hyundai, i30');

		expect(heading).toBeInTheDocument();
	});

	it('has correct year of production', () => {
		renderWithProviders(<Header brand="Hyundai" model="i30" productionDate="2021" />);

		const year = screen.getByText('2021');

		expect(year).toBeInTheDocument();
	});
});
