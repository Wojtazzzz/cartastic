import { SingleDetail } from 'components/atoms/cardOffer/singleDetail/SingleDetail';
import { Heading } from 'components/atoms/heading/Heading';
import FuelIcon from 'components/icons/fuel.svg';
import EngineIcon from 'components/icons/engine.svg';
import RoadIcon from 'components/icons/road.svg';
import GearboxIcon from 'components/icons/gearbox.svg';
import VehicleBodyIcon from 'components/icons/vehicle-body.svg';

type DetailsProps = {};

export const Details = ({}: DetailsProps) => {
	return (
		<div className="py-3 px-4">
			<Heading
				tag="h3"
				className="text-lg font-bold border-b-[1.5px] border-gray-500/25 pb-1"
			>
				9.700 €
			</Heading>

			<div className="flex justify-center gap-0.5 mt-2">
				<SingleDetail icon={FuelIcon} value="Petrol" label="Fuel type" />
				<SingleDetail icon={EngineIcon} value="2.0" label="Engine size" />
				<SingleDetail icon={RoadIcon} value="17.9k" label="Miles" />
				<SingleDetail icon={GearboxIcon} value="Manual" label="Gearbox" />
				<SingleDetail icon={VehicleBodyIcon} value="Saloon" label="Vehicle body" />
			</div>
		</div>
	);
};

type MilesIconProps = {
	miles: string;
};

const MilesIcon = ({ miles }: MilesIconProps) => (
	<span className="text-center font-bold">{miles}</span>
);
