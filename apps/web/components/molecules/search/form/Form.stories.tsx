/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// TODO: storybook loader
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import fetch from 'node-fetch';
import { Form } from './Form';
import { Providers } from 'app/Providers';
import { API_URL } from 'utils/env';
import type { BrandsResponse } from 'utils/types';

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
		brands: (await (await fetch(`${API_URL}/brands`)).json()) as BrandsResponse,
	}),
];

Default.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
