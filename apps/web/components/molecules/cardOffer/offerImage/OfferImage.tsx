import Image from 'next/image';
import { ImagesCount } from 'components/atoms/imagesCount/ImagesCount';
import { LikeOffer } from 'components/atoms/cardOffer/likeOffer/LikeOffer';

type OfferImageProps = {
	src: string;
	imagesCount: number;
	alt: string;
};

export const OfferImage = ({ src, imagesCount, alt }: OfferImageProps) => {
	return (
		<div className="w-[295px] h-[196px] relative">
			<Image src={src} alt={alt} className="w-full h-[196px]" fill />
			<ImagesCount count={imagesCount} position="top-right" />
			<LikeOffer />
		</div>
	);
};
