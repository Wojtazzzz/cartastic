import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LikeOffer } from './LikeOffer';

export default {
	title: 'Card Offer/atoms/LikeOffer',
	component: LikeOffer,
	decorators: [
		(Story) => (
			<div className="story-container w-64 h-64">
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof LikeOffer>;

type LikeOfferStory = ComponentStory<typeof LikeOffer>;

export const Default: LikeOfferStory = (props) => {
	return <LikeOffer {...props} />;
};

Default.args = {};
