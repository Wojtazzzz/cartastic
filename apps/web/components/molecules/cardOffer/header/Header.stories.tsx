import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';

export default {
	title: 'Card Offer/molecules/Header',
	component: Header,
} as ComponentMeta<typeof Header>;

type HeaderStory = ComponentStory<typeof Header>;

export const Default: HeaderStory = (props) => {
	return <Header {...props} />;
};

Default.args = {
	text: 'Brand, Model',
	productionYear: 2022,
};
