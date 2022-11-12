import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Formik } from 'formik';
import { InputNumber } from './InputNumber';

export default {
	title: 'Main Library/atoms/InputNumber',
	component: InputNumber,
	decorators: [
		(Story) => (
			<Formik initialValues={{ minPrice: 0 }} onSubmit={console.log}>
				<Story />
			</Formik>
		),
	],
} as ComponentMeta<typeof InputNumber>;

type InputNumberStory = ComponentStory<typeof InputNumber>;

export const Default: InputNumberStory = (props) => {
	return <InputNumber {...props} />;
};

Default.args = {
	name: 'minPrice',
	placeholder: 'Example placeholder',
};

Default.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
