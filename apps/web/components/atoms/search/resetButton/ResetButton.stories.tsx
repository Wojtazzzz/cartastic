import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResetButton } from './ResetButton';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';

export default {
	title: 'Search/atoms/ResetButton',
	component: ResetButton,
	decorators: [
		(Story) => (
			<SearchFormContextProvider>
				<Story />
			</SearchFormContextProvider>
		),
	],
} as ComponentMeta<typeof ResetButton>;

type ResetButtonStory = ComponentStory<typeof ResetButton>;

export const Default: ResetButtonStory = () => {
	return <ResetButton />;
};

Default.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
