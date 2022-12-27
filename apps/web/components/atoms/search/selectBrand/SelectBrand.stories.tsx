// TODO: storybook loader
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import fetch from 'node-fetch';
import { SelectBrand } from './SelectBrand';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { API_URL } from 'utils/env';

export default {
	title: 'Search/atoms/SelectBrand',
	component: SelectBrand,
	decorators: [
		(Story) => (
			<SearchFormContextProvider>
				<Story />
			</SearchFormContextProvider>
		),
	],
} as ComponentMeta<typeof SelectBrand>;

type SelectBrandStory = ComponentStory<typeof SelectBrand>;

export const Default: SelectBrandStory = (props, { loaded: { brands } }) => {
	return <SelectBrand {...props} brands={brands} />;
};

Default.args = {};

Default.loaders = [
	async () => ({
		brands: await (await fetch(`${API_URL}/brands`)).json(),
	}),
];
