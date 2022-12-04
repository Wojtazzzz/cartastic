import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { CardOffer } from './CardOffer';

describe('CardOffer component', () => {
	it('has correct link', () => {
		renderWithProviders(<CardOffer />);

		const link = screen.getByRole('link');

		expect(link).toHaveAttribute('href', '/offer/1');
	});

	it('has correct header', () => {
		renderWithProviders(<CardOffer />);

		const header = screen.getByRole('heading', { level: 3 });

		expect(header).toHaveTextContent('BMW, Series 3');
	});

	it('main image has correct alt', () => {
		renderWithProviders(<CardOffer />);

		const image = screen.getByRole('img', { name: 'BMW, Series 3' });

		expect(image).toBeInTheDocument();
	});

	it('has correct count of images ', () => {
		renderWithProviders(<CardOffer />);

		const count = screen.getByText('999999998');

		expect(count).toBeInTheDocument();
	});

	it('has button for liking offers', () => {
		renderWithProviders(<CardOffer />);

		const button = screen.getByRole('button', { name: 'Like offer' });

		expect(button).toBeInTheDocument();
	});

	it('has correct price', () => {
		renderWithProviders(<CardOffer />);

		const price = screen.getByRole('heading', { level: 4 });

		expect(price).toHaveTextContent('9.700 €');
	});

	it('has correct details ', () => {
		renderWithProviders(<CardOffer />);

		const fuelIcon = screen.getByAltText('Fuel type');
		const fuel = screen.getByText('Petrol');

		const sizeIcon = screen.getByAltText('Engine size');
		const size = screen.getByText('2.0');

		const milesIcon = screen.getByAltText('Miles');
		const miles = screen.getByText('17.9k');

		const gearboxIcon = screen.getByAltText('Gearbox');
		const gearbox = screen.getByText('Manual');

		const bodyIcon = screen.getByAltText('Vehicle body');
		const body = screen.getByText('Saloon');

		expect(fuelIcon).toBeInTheDocument();
		expect(fuel).toBeInTheDocument();

		expect(sizeIcon).toBeInTheDocument();
		expect(size).toBeInTheDocument();

		expect(milesIcon).toBeInTheDocument();
		expect(miles).toBeInTheDocument();

		expect(gearboxIcon).toBeInTheDocument();
		expect(gearbox).toBeInTheDocument();

		expect(bodyIcon).toBeInTheDocument();
		expect(body).toBeInTheDocument();
	});
});
