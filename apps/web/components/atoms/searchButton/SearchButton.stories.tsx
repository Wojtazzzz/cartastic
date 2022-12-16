import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { SearchButton } from './SearchButton';

export default {
	title: 'Main Library/atoms/SearchButton',
	component: SearchButton,
	decorators: [
		(Story) => (
			<SearchFormContextProvider>
				<Story />
			</SearchFormContextProvider>
		),
	],
} as ComponentMeta<typeof SearchButton>;

type SearchButtonStory = ComponentStory<typeof SearchButton>;

export const Default: SearchButtonStory = () => {
	return <SearchButton />;
};
