import Image from 'next/image';
import type { ReactElement } from 'react';

type SingleDetailProps = {
	icon: string | ReactElement;
	value: string;
	label: string;
};

export const SingleDetail = ({ icon, value, label }: SingleDetailProps) => {
	const isIcon = typeof icon === 'string';

	return (
		<div className="w-fit flex flex-col items-center">
			<div className="w-[50px] h-[45px] flex justify-center items-center">
				{isIcon ? (
					<Image width="35" height="40" src={icon} alt={label} title={label} />
				) : (
					icon
				)}
			</div>

			<span className="text-sm font-bold">{value}</span>
		</div>
	);
};
