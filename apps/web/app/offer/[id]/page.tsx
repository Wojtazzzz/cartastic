import { Heading } from 'components/atoms/heading/Heading';
import { fetchData } from 'utils/fetchData';
import { formatPrice } from 'utils/formatPrice';
import type { CarOfferByIdResponse, CarOffersResponse } from 'utils/types';

type OfferPageProps = {
	params: {
		id: number;
	};
};

export default async function CarOfferPage({ params }: OfferPageProps) {
	const carOffer = await fetchCarOfferById(params.id);

	return (
		<section className="w-full max-w-[1700px] flex flex-col gap-5 mt-8 mx-auto py-2 md:py-4 px-3 md:px-6 lg:px-10">
			<Heading tag="h2" className="text-2xl font-extrabold">
				{carOffer.brand.name}, {carOffer.model.name}
			</Heading>

			<article className="flex justify-center gap-8">
				<section className="w-full lg:w-2/3 flex justify-center">PHOTOS</section>

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
						<li className="">{carOffer.body}</li>
					</ul>

					<p className="my-2.5 font-semibold space-x-1">
						<span className="text-2xl">{formatPrice(carOffer.price)}</span>
						<span className="text-lg">PLN</span>
					</p>
				</section>
			</article>
		</section>
	);
}

const fetchCarOfferById = async (id: number) => {
	return await fetchData<CarOfferByIdResponse>(`/carOffers/${id}`);
};

export async function generateStaticParams() {
	const carOffers = await fetchData<CarOffersResponse>('/carOffers');

	return carOffers.map((carOffer) => ({
		id: String(carOffer.id),
	}));
}
