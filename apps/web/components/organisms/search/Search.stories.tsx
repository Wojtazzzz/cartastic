import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Providers } from 'app/Providers';
import { Search } from './Search';

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
