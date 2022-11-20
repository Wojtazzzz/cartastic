import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Providers } from 'app/Providers';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { Search } from './Search';

export default {
	title: 'Main Library/organisms/Search',
	component: Search,
	decorators: [
		(Story) => (
			<Providers>
				<SearchFormContextProvider>
					<Story />
				</SearchFormContextProvider>
			</Providers>
		),
	],
} as ComponentMeta<typeof Search>;

type SearchStory = ComponentStory<typeof Search>;

export const Default: SearchStory = (props, { loaded: { brands } }) => {
	return <Search {...props} brands={brands} />;
};

Default.args = {};

Default.loaders = [
	async () => ({
		brands: await (await fetch('http://localhost:8000/brands')).json(),
	}),
];
