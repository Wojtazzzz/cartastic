import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { SubmitButton } from './SubmitButton';

export default {
	title: 'Search/atoms/SubmitButton',
	component: SubmitButton,
	decorators: [
		(Story) => (
			<SearchFormContextProvider>
				<Story />
			</SearchFormContextProvider>
		),
	],
} as ComponentMeta<typeof SubmitButton>;

type SubmitButtonStory = ComponentStory<typeof SubmitButton>;

export const Default: SubmitButtonStory = () => {
	return <SubmitButton />;
};
