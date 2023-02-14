import { Heading } from 'components/atoms/heading/Heading';
import { fetchData } from 'utils/fetchData';
import { formatNumber } from 'utils/formatNumber';
import { formatPrice } from 'utils/formatPrice';
import type { CarOfferByIdResponse, CarOffersResponse } from 'utils/types';

import 'lightbox.js-react/dist/index.css';
import { Gallery } from 'components/atoms/gallery/Gallery';

type OfferPageProps = {
	params: {
		id: number;
	};
};

const fetchCarOfferById = async (id: number) => {
	return await fetchData<CarOfferByIdResponse>(`/carOffers/${id}`);
};

const images = [
	{
		src: 'https://source.unsplash.com/sQZ_A17cufs/549x711',
		alt: 'Mechanical keyboard with white keycaps.',
	},
	{
		src: 'https://source.unsplash.com/rsAeSMzOX9Y/768x512',
		alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
	},
	{
		src: 'https://source.unsplash.com/Z6SXt1v5tP8/768x512',
		alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
	},
];

export default async function CarOfferPage({ params }: OfferPageProps) {
	const carOffer = await fetchCarOfferById(params.id);

	return (
		<section className="w-full max-w-[1600px] flex flex-col gap-5 mt-8 mx-auto py-2 md:py-4 px-3 md:px-6 lg:px-10">
			<Heading tag="h2" className="text-2xl font-extrabold">
				{carOffer.brand.name}, {carOffer.model.name}
			</Heading>

			<article className="flex flex-col gap-8">
				<div className="flex justify-center gap-8">
					<section className="w-full lg:w-2/3 flex justify-center">
						<Heading tag="h3" className="sr-only">
							Photos
						</Heading>

						<div className="w-[850px] h-[450px] overflow-hidden bg-gray-100">
							<Gallery images={images} />
						</div>
					</section>

					<section className="w-full lg:w-1/3">
						<Heading tag="h3" className="text-xl font-semibold">
							{carOffer.brand.name} {carOffer.model.name} {carOffer.fuel}
						</Heading>

						<ul role="list" className="flex gap-2 text-gray-700">
							<li className="after:inline-block after:align-middle after:content-[''] after:w-1.5 after:h-1.5 after:bg-black after:relative after:bottom-px after:ml-2 after:rounded-full">
								{carOffer.productionYear}
							</li>
							<li className="after:inline-block after:align-middle after:content-[''] after:w-1.5 after:h-1.5 after:bg-black after:relative after:bottom-px after:ml-2 after:rounded-full">
								{carOffer.miles}
							</li>
							<li className="after:inline-block after:align-middle after:content-[''] after:w-1.5 after:h-1.5 after:bg-black after:relative after:bottom-px after:ml-2 after:rounded-full">
								{carOffer.fuel}
							</li>
							<li>{carOffer.body}</li>
						</ul>

						<p className="my-2.5 font-semibold space-x-1">
							<span className="text-2xl">{formatPrice(carOffer.price)}</span>
							<span className="text-lg">PLN</span>
						</p>

						<div>
							{/* TODO: CHANGE TO CORRECT BUTTON */}
							<button>Contact with seller</button>
						</div>
					</section>
				</div>

				<div>
					<section className="w-full lg:w-2/3">
						<Heading tag="h3" className="text-xl font-semibold">
							Details
						</Heading>

						<div className="flex gap-5 w-2/3 text-sm">
							<ul className="w-full lg:w-1/2 space-y-0.5">
								<li className="flex justify-between">
									<span>Fuel:</span>
									<span>{carOffer.fuel}</span>
								</li>
								<li className="flex justify-between">
									<span>Miles:</span>
									<span>{formatNumber(carOffer.miles, 'mile')}</span>
								</li>
								<li className="flex justify-between">
									<span>Body:</span>
									<span>{carOffer.body}</span>
								</li>
								<li className="flex justify-between">
									<span>HPI:</span>
									<span>-</span>
								</li>
								<li className="flex justify-between">
									<span>Transmission:</span>
									<span>{carOffer.transmission}</span>
								</li>
							</ul>
							<ul className="w-full lg:w-1/2 space-y-0.5">
								<li className="flex justify-between">
									<span>Production:</span>
									<span>{carOffer.productionYear}</span>
								</li>
								<li className="flex justify-between">
									<span>Engine Capacity:</span>
									<span>{carOffer.engine} cm³</span>
								</li>
								<li className="flex justify-between">
									<span>Gears:</span>
									<span>-</span>
								</li>
								<li className="flex justify-between">
									<span>Top Speed:</span>
									<span>-</span>
								</li>
							</ul>
						</div>
					</section>
				</div>

				<div>
					<section className="w-full lg:w-2/3">
						<Heading tag="h3" className="text-xl font-semibold">
							Description
						</Heading>

						<span className="prose prose-base">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
							asperiores commodi iure nobis? Explicabo, numquam itaque aperiam
							eligendi, temporibus id maiores vitae voluptatibus sint iure laudantium
							magnam! Assumenda, eligendi error?
						</span>
					</section>
				</div>
			</article>
		</section>
	);
}

export async function generateStaticParams() {
	const carOffers = await fetchData<CarOffersResponse>('/carOffers');

	return carOffers.map((carOffer) => ({
		id: String(carOffer.id),
	}));
}
