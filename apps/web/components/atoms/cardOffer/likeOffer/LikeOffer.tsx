'use client';

import Image from 'next/image';
import Heart from 'components/icons/red-heart.svg';

type LikeOfferProps = {};

export const LikeOffer = ({}: LikeOfferProps) => {
	const like = () => {
		console.log('LIKE');
	};

	return (
		<button
			type="button"
			aria-label="Like offer"
			className="w-10 h-10 flex justify-center items-center rounded-full bg-white shadow-md absolute -bottom-5 right-6"
			onClick={like}
		>
			<Image width="27" height="27" src={Heart} alt="" />
		</button>
	);
};
