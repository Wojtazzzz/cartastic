import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Providers } from 'app/Providers';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { SearchResultsCount } from './SearchResultsCount';

export default {
	title: 'Main Library/atoms/SearchResultsCount',
	component: SearchResultsCount,
	decorators: [
		(Story) => (
			<Providers>
				<SearchFormContextProvider>
					<Story />
				</SearchFormContextProvider>
			</Providers>
		),
	],
} as ComponentMeta<typeof SearchResultsCount>;

type SearchResultsCountStory = ComponentStory<typeof SearchResultsCount>;

export const Default: SearchResultsCountStory = (props) => {
	return <SearchResultsCount {...props} />;
};

Default.args = {};
Default.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
