import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchForm } from './SearchForm';

export default {
	title: 'Main Library/molecules/SearchForm',
	component: SearchForm,
} as ComponentMeta<typeof SearchForm>;

type SearchFormStory = ComponentStory<typeof SearchForm>;

export const Default: SearchFormStory = (props) => {
	return <SearchForm {...props} />;
};

Default.args = {};

Default.parameters = {
	backgrounds: {
		default: true,
	},
};
