import { ImagesCount } from 'components/atoms/cardOffer/imagesCount/ImagesCount';
import { LikeOffer } from 'components/atoms/cardOffer/likeOffer/LikeOffer';
import Image from 'next/image';

type OfferImageProps = {
	src: string;
};

export const OfferImage = ({ src }: OfferImageProps) => {
	return (
		<div className="relative">
			<Image width="295" height="196" src={src} alt="BMW, Series 3" />
			<ImagesCount count={999999998} />
			<LikeOffer />
		</div>
	);
};
