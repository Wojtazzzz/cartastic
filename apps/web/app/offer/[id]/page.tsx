import { Heading } from 'components/atoms/heading/Heading';
import { fetchData } from 'utils/fetchData';
import { formatNumber } from 'utils/formatNumber';
import { formatPrice } from 'utils/formatPrice';
import type { CarOfferByIdResponse, CarOffersResponse } from 'utils/types';
import 'lightbox.js-react/dist/index.css';
import { Gallery } from 'components/atoms/gallery/Gallery';
import { ContactWithSeller } from 'components/molecules/contactWithSeller/ContactWithSeller';
import Image from 'next/image';
import MagnifyingGlassIcon from 'components/icons/magnifying_glass.svg';

type OfferPageProps = {
	params: {
		id: number;
	};
};

const fetchCarOfferById = async (id: number) => {
	return await fetchData<CarOfferByIdResponse>(`/carOffers/${id}`);
};

export default async function CarOfferPage({ params }: OfferPageProps) {
	const carOffer = await fetchCarOfferById(params.id);

	return (
		<section className="w-full max-w-[1408px] flex flex-col gap-5 mt-8 mx-auto py-2 md:py-4 px-3 md:px-6 lg:px-10">
			<Heading tag="h2" className="text-2xl font-extrabold border-b pb-3 mb-1">
				{carOffer.brand.name}
				{carOffer.model?.name && `, ${carOffer.model.name}`}
			</Heading>

			<article className="flex flex-col gap-8">
				<div className="flex justify-between lg:space-x-8 flex-col lg:flex-row space-y-8 lg:space-y-0">
					<section className="w-full lg:w-2/3 flex justify-center">
						<Heading tag="h3" className="sr-only">
							Photos
						</Heading>

						<div className="w-full h-[450px] overflow-hidden bg-gray-100">
							<Gallery images={carOffer.images} />
						</div>
					</section>

					<section className="w-full lg:w-1/3">
						<Heading tag="h3" className="text-xl font-semibold">
							{carOffer.brand.name} {carOffer.model?.name} {carOffer.fuel}
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
							<span className="text-xl"> €</span>
						</p>

						<section className="max-w-md w-full border p-4 flex flex-col gap-4 mt-5">
							<Heading tag="h4" className="text-xl font-semibold">
								Krzysztof Skowroński
							</Heading>

							<p className="flex gap-2 items-center">
								<Image src={MagnifyingGlassIcon} width="13" height="13" alt="" />
								<span>Łambinowice, nyski, Opolskie</span>
							</p>

							<ContactWithSeller />
						</section>
					</section>
				</div>

				<div>
					<section className="w-full lg:w-2/3 space-y-1">
						<Heading tag="h3" className="text-xl font-semibold">
							Details
						</Heading>

						<div className="flex gap-7 w-2/3">
							<ul className="w-full lg:w-1/2 space-y-0.5">
								<li className="flex justify-between">
									<span>Fuel:</span>
									<span className="capitalize">{carOffer.fuel}</span>
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
									<span>HP:</span>
									<span>{carOffer.hp}</span>
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
									<span>{carOffer.gears} speed</span>
								</li>
								<li className="flex justify-between">
									<span>Top Speed:</span>
									<span>{carOffer.topSpeed} mph</span>
								</li>
								<li className="flex justify-between">
									<span>Doors:</span>
									<span>{carOffer.doors}</span>
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

						<span className="prose prose-base">{carOffer.description}</span>
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
