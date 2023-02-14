import { screen } from '@testing-library/dom';
import { CardOffer } from './CardOffer';
import { renderWithProviders } from 'utils/renderWithProviders';
import type { CarOffer } from 'utils/types';

const carOffer = {
	id: 24,
	images: ['/img/no-image.jpg'],
	description:
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum architecto, odit quam aliquam a amet voluptatem cupiditate obcaecati soluta iusto reprehenderit necessitatibus officia dolores, perspiciatis fuga nesciunt velit mollitia.',
	price: 9700,
	gears: 4,
	topSpeed: 250,
	doors: 4,
	hp: 200,
	productionYear: 2021,
	miles: 11700,
	fuel: 'petrol',
	engine: 1910,
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
} satisfies CarOffer;

describe('CardOffer component', () => {
	it('has correct link', () => {
		renderWithProviders(<CardOffer {...carOffer} />);

		const link = screen.getByRole('link');

		expect(link).toHaveAttribute('href', '/offer/24');
	});

	it('has correct header', () => {
		renderWithProviders(<CardOffer {...carOffer} />);

		const header = screen.getByRole('heading', { level: 3 });

		expect(header).toHaveTextContent('Audi, A7');
	});

	it('has correct production year', () => {
		renderWithProviders(<CardOffer {...carOffer} />);

		const year = screen.getByText('2021');

		expect(year).toBeInTheDocument();
	});

	it('main image has correct alt', () => {
		renderWithProviders(<CardOffer {...carOffer} />);

		const image = screen.getByRole('img', { name: 'Audi, A7' });

		expect(image).toBeInTheDocument();
	});

	it('has correct count of images ', () => {
		renderWithProviders(
			<CardOffer
				{...carOffer}
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
		renderWithProviders(<CardOffer {...carOffer} />);

		const button = screen.getByRole('button', { name: 'Like offer' });

		expect(button).toBeInTheDocument();
	});

	it('has correct price', () => {
		renderWithProviders(<CardOffer {...carOffer} />);

		const price = screen.getByRole('heading', { level: 4 });

		expect(price).toHaveTextContent('9,700 €');
	});

	it('has correct details ', () => {
		renderWithProviders(<CardOffer {...carOffer} />);

		const fuelIcon = screen.getByAltText('Fuel type');
		const fuel = screen.getByText('petrol');

		const sizeIcon = screen.getByAltText('Engine size');
		const size = screen.getByText('1.9 l');

		const milesIcon = screen.getByAltText('Miles');
		const miles = screen.getByText('11.7 k');

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
