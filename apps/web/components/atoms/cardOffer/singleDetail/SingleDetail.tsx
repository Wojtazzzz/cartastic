import Image from 'next/image';

type SingleDetailProps = {
	icon: string;
	value: string;
	label: string;
};

export const SingleDetail = ({ icon, value, label }: SingleDetailProps) => {
	return (
		<div className="w-fit flex flex-col items-center">
			<div className="w-[50px] h-[45px] flex justify-center items-center">
				<Image width="35" height="40" src={icon} alt={label} />
			</div>

			<span className="text-sm font-bold">{value}</span>
		</div>
	);
};
