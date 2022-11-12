import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from './Search';

export default {
	title: 'Main Library/organisms/Search',
	component: Search,
} as ComponentMeta<typeof Search>;

type SearchStory = ComponentStory<typeof Search>;

export const Default: SearchStory = (props) => {
	return <Search {...props} />;
};

Default.args = {};
