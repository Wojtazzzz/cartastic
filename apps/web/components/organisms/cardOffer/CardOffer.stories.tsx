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

Default.args = {
	id: 3,
	images: [],
	price: 323232,
	fuel: 'diesel',
	engine: 2.2,
	transmission: 'auto',
	miles: 622323,
	body: 'estate',
	productionYear: 2018,
	brandId: 1,
	brand: {
		id: 1,
		name: 'BMW',
	},
	modelId: 1,
	model: {
		id: 1,
		brandId: 1,
		name: 'Series 1',
	},
};
