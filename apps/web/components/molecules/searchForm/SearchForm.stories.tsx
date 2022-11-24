import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Providers } from 'app/Providers';
import { SearchForm } from './SearchForm';
import fetch from 'node-fetch';

export default {
	title: 'Main Library/molecules/SearchForm',
	component: SearchForm,
	decorators: [
		(Story) => (
			<Providers>
				<Story />
			</Providers>
		),
	],
} as ComponentMeta<typeof SearchForm>;

type SearchFormStory = ComponentStory<typeof SearchForm>;

export const Default: SearchFormStory = (props, { loaded: { brands } }) => {
	return <SearchForm {...props} brands={brands} />;
};

Default.args = {};

Default.loaders = [
	async () => ({
		brands: await (await fetch('http://localhost:8000/brands')).json(),
	}),
];

Default.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
