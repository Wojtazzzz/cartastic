'use client';

import { SlideshowLightbox } from 'lightbox.js-react';
import Image from 'next/image';

type GalleryProps = {
	images: {
		src: string;
		alt: string;
	}[];
};

export const Gallery = ({ images }: GalleryProps) => {
	return (
		<div className="w-full relative flex justify-center">
			<ul>
				<SlideshowLightbox
					theme="lightbox"
					lightboxIdentifier="lightbox1"
					framework="next"
					images={images}
					showThumbnails={true}
				>
					{images.map((image, index) => (
						<li key={index}>
							<Image
								src={image.src}
								alt={`${index + 1} / ${images.length}`}
								data-lightboxjs="lightbox1"
								quality={80}
								width={500}
								height={500}
							/>
						</li>
					))}
				</SlideshowLightbox>
			</ul>

			<div className="absolute bottom-2 right-2">{images.length}</div>
		</div>
	);
};
