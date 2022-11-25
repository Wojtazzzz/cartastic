import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { SearchResultsCount } from './SearchResultsCount';

export default {
	title: 'Main Library/atoms/SearchResultsCount',
	component: SearchResultsCount,
	decorators: [
		(Story) => (
			<SearchFormContextProvider>
				<Story />
			</SearchFormContextProvider>
		),
	],
} as ComponentMeta<typeof SearchResultsCount>;

type SearchResultsCountStory = ComponentStory<typeof SearchResultsCount>;

export const Default: SearchResultsCountStory = (props) => {
	return <SearchResultsCount {...props} />;
};

Default.args = {};
