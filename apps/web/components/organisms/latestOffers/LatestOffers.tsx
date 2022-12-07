import { Heading } from 'components/atoms/heading/Heading';
import { use } from 'react';
import { fetchData } from 'utils/fetchData';
import { CardOffer } from '../cardOffer/CardOffer';
import type { Brand, Model } from '../search/Search';

export type Car = {
	id: number;
	images: string[];
	price: number;
	productionYear: number;
	miles: number;
	fuel: Fuel;
	engine: number;
	body: Body;
	transmission: Transmission;
	brandId: number;
	brand: Brand;
	modelId: number;
	model: Model;
};

export type Fuel = 'diesel' | 'petrol' | 'gasoline' | 'electric';

export type Body =
	| 'hatchback'
	| 'estate'
	| 'peopleCarrier'
	| 'saloon'
	| 'suv'
	| 'coupe'
	| 'pickup'
	| 'convertible';

export type Transmission = 'manual' | 'auto';

export const LatestOffers = () => {
	const data = use(fetchData<Car[]>('/cars/latest'));

	return (
		<section className="w-full max-w-[1700px] flex flex-col gap-5 mt-8 mx-auto py-2 md:py-4 px-3 md:px-6 lg:px-10">
			<Heading tag="h2" className="text-2xl font-extrabold">
				Latest Offers
			</Heading>

			{data.length <= 0 ? (
				<span>Empty</span>
			) : (
				<ul className="flex flex-wrap justify-center gap-6">
					{data.map((car, i) => (
						<li key={i}>
							<CardOffer {...car} />
						</li>
					))}
				</ul>
			)}
		</section>
	);
};
