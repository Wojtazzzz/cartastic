import { formatEngine } from './formatEngine';
import { formatMiles } from './formatMiles';
import { SingleDetail } from 'components/atoms/cardOffer/singleDetail/SingleDetail';
import { Heading } from 'components/atoms/heading/Heading';
import FuelIcon from 'components/icons/fuel.svg';
import EngineIcon from 'components/icons/engine.svg';
import RoadIcon from 'components/icons/road.svg';
import GearboxIcon from 'components/icons/gearbox.svg';
import VehicleBodyIcon from 'components/icons/vehicle-body.svg';
import { formatPrice } from 'utils/formatPrice';
import type { Car } from 'utils/types';

export type DetailsProps = Pick<
	Car,
	'price' | 'fuel' | 'engine' | 'miles' | 'transmission' | 'body'
>;

export const Details = ({ price, fuel, engine, miles, transmission, body }: DetailsProps) => {
	const formattedPrice = formatPrice(price);
	const formattedEngine = formatEngine(engine);
	const formattedMiles = formatMiles(miles);

	return (
		<div className="py-3 px-4">
			<Heading
				tag="h4"
				className="text-lg font-bold border-b-[1.5px] border-gray-500/25 pb-1"
			>
				{formattedPrice} €
			</Heading>

			<div className="flex justify-center gap-0.5 mt-2">
				<SingleDetail icon={FuelIcon} value={fuel} label="Fuel type" />
				<SingleDetail icon={EngineIcon} value={formattedEngine} label="Engine size" />
				<SingleDetail icon={RoadIcon} value={formattedMiles} label="Miles" />
				<SingleDetail icon={GearboxIcon} value={transmission} label="Gearbox" />
				<SingleDetail icon={VehicleBodyIcon} value={body} label="Vehicle body" />
			</div>
		</div>
	);
};
