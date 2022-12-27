import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResultsCount } from './ResultsCount';
import { Providers } from 'app/Providers';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';

export default {
	title: 'Search/atoms/ResultsCount',
	component: ResultsCount,
	decorators: [
		(Story) => (
			<Providers>
				<SearchFormContextProvider>
					<Story />
				</SearchFormContextProvider>
			</Providers>
		),
	],
} as ComponentMeta<typeof ResultsCount>;

type ResultsCountStory = ComponentStory<typeof ResultsCount>;

export const Default: ResultsCountStory = () => {
	return <ResultsCount />;
};

Default.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
