import { screen } from '@testing-library/dom';
import { Details } from './Details';
import type { DetailsProps } from './Details';
import { renderWithProviders } from 'utils/renderWithProviders';

const details: DetailsProps = {
	price: 218700,
	fuel: 'diesel',
	engine: 20,
	miles: 812345,
	transmission: 'auto',
	body: 'peopleCarrier',
};

describe('Details component', () => {
	it('has correct price', () => {
		renderWithProviders(<Details {...details} />);

		const heading = screen.getByRole('heading', { level: 4 });

		expect(heading).toHaveTextContent('218,700 €');
	});

	it('has fuel type info', () => {
		renderWithProviders(<Details {...details} />);

		const fuelIcon = screen.getByAltText('Fuel type');
		const fuel = screen.getByText('diesel');

		expect(fuelIcon).toBeInTheDocument();
		expect(fuel).toBeInTheDocument();
	});

	it('has engine size info', () => {
		renderWithProviders(<Details {...details} />);

		const sizeIcon = screen.getByAltText('Engine size');
		const size = screen.getByText('20.0 L');

		expect(sizeIcon).toBeInTheDocument();
		expect(size).toBeInTheDocument();
	});

	it('has miles info', () => {
		renderWithProviders(<Details {...details} />);

		const milesIcon = screen.getByAltText('Miles');
		const miles = screen.getByText('812,345 mi');

		expect(milesIcon).toBeInTheDocument();
		expect(miles).toBeInTheDocument();
	});

	it('has gearbox info', () => {
		renderWithProviders(<Details {...details} />);

		const gearboxIcon = screen.getByAltText('Gearbox');
		const gearbox = screen.getByText('auto');

		expect(gearboxIcon).toBeInTheDocument();
		expect(gearbox).toBeInTheDocument();
	});

	it('has vehicle body info', () => {
		renderWithProviders(<Details {...details} />);

		const bodyIcon = screen.getByAltText('Vehicle body');
		const body = screen.getByText('peopleCarrier');

		expect(bodyIcon).toBeInTheDocument();
		expect(body).toBeInTheDocument();
	});
});
