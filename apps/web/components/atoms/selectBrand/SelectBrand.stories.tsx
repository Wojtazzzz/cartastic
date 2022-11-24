import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { SelectBrand } from './SelectBrand';
import fetch from 'node-fetch';

export default {
	title: 'Main Library/atoms/SelectBrand',
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
		brands: await (await fetch('http://localhost:8000/brands')).json(),
	}),
];