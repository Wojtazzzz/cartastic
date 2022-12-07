import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LatestOffers } from './LatestOffers';

export default {
	title: 'Main Library/organisms/LatestOffers',
	component: LatestOffers,
} as ComponentMeta<typeof LatestOffers>;

type LatestOffersStory = ComponentStory<typeof LatestOffers>;

export const Default: LatestOffersStory = () => {
	return <LatestOffers />;
};
