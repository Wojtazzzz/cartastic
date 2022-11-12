import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Formik } from 'formik';
import { InputSelect } from './InputSelect';

const BRANDS = [
	{ value: 'bmw', name: 'BMW' },
	{ value: 'mazda', name: 'Mazda' },
	{ value: 'citroen', name: 'Citroen' },
	{ value: 'lamborghini', name: 'Lamborghini' },
	{ value: 'opel', name: 'Opel' },
	{ value: 'ford', name: 'Ford' },
];

export default {
	title: 'Main Library/atoms/InputSelect',
	component: InputSelect,
	decorators: [
		(Story) => (
			<Formik initialValues={{ brand: 0 }} onSubmit={console.log}>
				<Story />
			</Formik>
		),
	],
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
