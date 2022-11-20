import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BRANDS } from 'utils/mockedBrands';
import { InputSelect } from './InputSelect';

export default {
	title: 'Main Library/atoms/InputSelect',
	component: InputSelect,
} as ComponentMeta<typeof InputSelect>;

type InputSelectStory = ComponentStory<typeof InputSelect>;

export const Default: InputSelectStory = (props) => {
	return <InputSelect {...props} />;
};

Default.args = {
	'aria-label': 'Brand',
	name: 'brand',
	placeholder: 'Brand',
	options: BRANDS,
};
