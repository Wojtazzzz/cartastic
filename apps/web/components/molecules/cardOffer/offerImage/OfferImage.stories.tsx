import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { OfferImage } from './OfferImage';

export default {
	title: 'Card Offer/molecules/OfferImage',
	component: OfferImage,
	decorators: [
		(Story) => (
			<div className="story-container w-[295px]">
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof OfferImage>;

type OfferImageStory = ComponentStory<typeof OfferImage>;

export const Default: OfferImageStory = (props) => {
	return <OfferImage {...props} />;
};

Default.args = {
	src: '/img/offer-image.png',
	imagesCount: 8,
	alt: 'Simple Alt',
};
