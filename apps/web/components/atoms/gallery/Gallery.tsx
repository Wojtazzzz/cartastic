'use client';

import { SlideshowLightbox } from 'lightbox.js-react';
import Image from 'next/image';
import { ImagesCount } from '../imagesCount/ImagesCount';

type GalleryProps = {
	images: string[];
};

type GalleryImage = {
	src: string;
	alt: string;
};

export const Gallery = ({ images }: GalleryProps) => {
	return (
		<div className="w-full h-full relative flex justify-center">
			<ul className="w-full">
				<SlideshowLightbox
					theme="lightbox"
					lightboxIdentifier="lightbox1"
					framework="next"
					images={images.map(
						(image, index) =>
							({
								src: image,
								alt: `${index + 1} / ${images.length}`,
							} satisfies GalleryImage)
					)}
					showThumbnails={true}
					className="w-full h-full"
				>
					{images.map((image, index) => (
						<li key={index}>
							<Image
								src={image}
								alt={`${index + 1} / ${images.length}`}
								data-lightboxjs="lightbox1"
								quality={80}
								width={500}
								height={450}
								className="object-contain w-full !h-full align-middle"
							/>
						</li>
					))}
				</SlideshowLightbox>
			</ul>

			<ImagesCount count={images.length} position="bottom-right" />
		</div>
	);
};
