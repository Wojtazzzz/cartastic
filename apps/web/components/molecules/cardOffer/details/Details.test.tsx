import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { Details } from './Details';

describe('Details component', () => {
	it('has correct price', () => {
		renderWithProviders(<Details />);

		const heading = screen.getByRole('heading');

		expect(heading).toHaveTextContent('9.700 €');
	});

	it('has fuel type info', () => {
		renderWithProviders(<Details />);

		const fuelIcon = screen.getByAltText('Fuel type');
		const fuel = screen.getByText('Petrol');

		expect(fuelIcon).toBeInTheDocument();
		expect(fuel).toBeInTheDocument();
	});

	it('has engine size info', () => {
		renderWithProviders(<Details />);

		const sizeIcon = screen.getByAltText('Engine size');
		const size = screen.getByText('2.0');

		expect(sizeIcon).toBeInTheDocument();
		expect(size).toBeInTheDocument();
	});

	it('has miles info', () => {
		renderWithProviders(<Details />);

		const milesIcon = screen.getByAltText('Miles');
		const miles = screen.getByText('17.9k');

		expect(milesIcon).toBeInTheDocument();
		expect(miles).toBeInTheDocument();
	});

	it('has gearbox info', () => {
		renderWithProviders(<Details />);

		const gearboxIcon = screen.getByAltText('Gearbox');
		const gearbox = screen.getByText('Manual');

		expect(gearboxIcon).toBeInTheDocument();
		expect(gearbox).toBeInTheDocument();
	});

	it('has vehicle body info', () => {
		renderWithProviders(<Details />);

		const bodyIcon = screen.getByAltText('Vehicle body');
		const body = screen.getByText('Saloon');

		expect(bodyIcon).toBeInTheDocument();
		expect(body).toBeInTheDocument();
	});
});
