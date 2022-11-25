import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { SearchResetButton } from './SearchResetButton';

export default {
	title: 'Main Library/atoms/SearchResetButton',
	component: SearchResetButton,
	decorators: [
		(Story) => (
			<SearchFormContextProvider>
				<Story />
			</SearchFormContextProvider>
		),
	],
} as ComponentMeta<typeof SearchResetButton>;

type SearchResetButtonStory = ComponentStory<typeof SearchResetButton>;

export const Default: SearchResetButtonStory = (props) => {
	return <SearchResetButton {...props} />;
};

Default.args = {};
