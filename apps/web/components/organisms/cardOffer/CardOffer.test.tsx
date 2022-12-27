import { screen } from '@testing-library/dom';
import { CardOffer } from './CardOffer';
import { renderWithProviders } from 'utils/renderWithProviders';
import type { Car } from 'utils/types';

const car = {
	id: 24,
	images: ['/img/no-image.jpg'],
	price: 9700,
	productionYear: 2021,
	miles: 11700,
	fuel: 'petrol',
	engine: 2,
	body: 'saloon',
	transmission: 'manual',
	brandId: 1,
	brand: {
		id: 1,
		name: 'Audi',
	},
	modelId: 1,
	model: {
		id: 1,
		name: 'A7',
	},
} satisfies Car;

describe('CardOffer component', () => {
	it('has correct link', () => {
		renderWithProviders(<CardOffer {...car} />);

		const link = screen.getByRole('link');

		expect(link).toHaveAttribute('href', '/offer/24');
	});

	it('has correct header', () => {
		renderWithProviders(<CardOffer {...car} />);

		const header = screen.getByRole('heading', { level: 3 });

		expect(header).toHaveTextContent('Audi, A7');
	});

	it('has correct production year', () => {
		renderWithProviders(<CardOffer {...car} />);

		const year = screen.getByText('2021');

		expect(year).toBeInTheDocument();
	});

	it('main image has correct alt', () => {
		renderWithProviders(<CardOffer {...car} />);

		const image = screen.getByRole('img', { name: 'Audi, A7' });

		expect(image).toBeInTheDocument();
	});

	it('has correct count of images ', () => {
		renderWithProviders(
			<CardOffer
				{...car}
				images={[
					'/img/no-image.jpg',
					'/img/no-image.jpg',
					'/img/no-image.jpg',
					'/img/no-image.jpg',
					'/img/no-image.jpg',
					'/img/no-image.jpg',
					'/img/no-image.jpg',
					'/img/no-image.jpg',
					'/img/no-image.jpg',
					'/img/no-image.jpg',
					'/img/no-image.jpg',
				]}
			/>
		);

		const count = screen.getByText('11');

		expect(count).toBeInTheDocument();
	});

	it('has button for liking offers', () => {
		renderWithProviders(<CardOffer {...car} />);

		const button = screen.getByRole('button', { name: 'Like offer' });

		expect(button).toBeInTheDocument();
	});

	it('has correct price', () => {
		renderWithProviders(<CardOffer {...car} />);

		const price = screen.getByRole('heading', { level: 4 });

		expect(price).toHaveTextContent('9,700 €');
	});

	it('has correct details ', () => {
		renderWithProviders(<CardOffer {...car} />);

		const fuelIcon = screen.getByAltText('Fuel type');
		const fuel = screen.getByText('petrol');

		const sizeIcon = screen.getByAltText('Engine size');
		const size = screen.getByText('2.0 L');

		const milesIcon = screen.getByAltText('Miles');
		const miles = screen.getByText('11,700 mi');

		const gearboxIcon = screen.getByAltText('Gearbox');
		const gearbox = screen.getByText('manual');

		const bodyIcon = screen.getByAltText('Vehicle body');
		const body = screen.getByText('saloon');

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
