import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from './Search';
import { Providers } from 'app/Providers';

export default {
	title: 'Search/organisms/Search',
	component: Search,
	decorators: [
		(Story) => (
			<Providers>
				<Story />
			</Providers>
		),
	],
} as ComponentMeta<typeof Search>;

type SearchStory = ComponentStory<typeof Search>;

export const Default: SearchStory = () => {
	return <Search />;
};
