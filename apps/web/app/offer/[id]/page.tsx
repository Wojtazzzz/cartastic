import { fetchData } from 'utils/fetchData';
import type { CarOfferByIdResponse, CarOffersResponse } from 'utils/types';

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

	return <div className="">NAME: {carOffer.model.name}</div>;
}

export async function generateStaticParams() {
	const carOffers = await fetchData<CarOffersResponse>('/carOffers');

	return carOffers.map((carOffer) => ({
		id: String(carOffer.id),
	}));
}
