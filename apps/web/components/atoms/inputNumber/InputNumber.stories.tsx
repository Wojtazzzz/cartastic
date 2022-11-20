import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputNumber } from './InputNumber';

export default {
	title: 'Main Library/atoms/InputNumber',
	component: InputNumber,
} as ComponentMeta<typeof InputNumber>;

type InputNumberStory = ComponentStory<typeof InputNumber>;

export const Default: InputNumberStory = (props) => {
	return <InputNumber {...props} />;
};

Default.args = {
	name: 'example-name',
	placeholder: 'Example placeholder',
};

Default.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
