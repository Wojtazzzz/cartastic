import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Providers } from 'app/Providers';
import { Form } from './Form';
import fetch from 'node-fetch';
import { API_URL } from 'utils/env';

export default {
	title: 'Search/molecules/Form',
	component: Form,
	decorators: [
		(Story) => (
			<Providers>
				<Story />
			</Providers>
		),
	],
} as ComponentMeta<typeof Form>;

type FormStory = ComponentStory<typeof Form>;

export const Default: FormStory = (props, { loaded: { brands } }) => {
	return <Form {...props} brands={brands} />;
};

Default.loaders = [
	async () => ({
		brands: await (await fetch(`${API_URL}/brands`)).json(),
	}),
];

Default.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
