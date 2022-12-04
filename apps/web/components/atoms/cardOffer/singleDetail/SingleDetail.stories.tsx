import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SingleDetail } from './SingleDetail';
import FuelIcon from 'components/icons/fuel.svg';

export default {
	title: 'Card Offer/atoms/SingleDetail',
	component: SingleDetail,
} as ComponentMeta<typeof SingleDetail>;

type SingleDetailStory = ComponentStory<typeof SingleDetail>;

export const WithIcon: SingleDetailStory = (props) => {
	return <SingleDetail {...props} />;
};

WithIcon.args = {
	icon: FuelIcon,
	value: 'Value',
	label: 'A11y label',
};

export const WithComponent: SingleDetailStory = (props) => {
	return <SingleDetail {...props} />;
};

WithComponent.args = {
	icon: <span>17.9k</span>,
	value: 'Value',
	label: 'A11y label',
};
