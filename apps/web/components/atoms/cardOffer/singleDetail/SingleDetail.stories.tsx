import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SingleDetail } from './SingleDetail';
import FuelIcon from 'components/icons/fuel.svg';

export default {
	title: 'Card Offer/atoms/SingleDetail',
	component: SingleDetail,
} as ComponentMeta<typeof SingleDetail>;

type SingleDetailStory = ComponentStory<typeof SingleDetail>;

export const Default: SingleDetailStory = (props) => {
	return <SingleDetail {...props} />;
};

Default.args = {
	icon: FuelIcon,
	value: 'Value',
	label: 'A11y label',
};
