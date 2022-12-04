import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardOffer } from './CardOffer';

export default {
	title: 'Card Offer/organisms/CardOffer',
	component: CardOffer,
} as ComponentMeta<typeof CardOffer>;

type CardOfferStory = ComponentStory<typeof CardOffer>;

export const Default: CardOfferStory = (props) => {
	return <CardOffer {...props} />;
};

Default.args = {};
