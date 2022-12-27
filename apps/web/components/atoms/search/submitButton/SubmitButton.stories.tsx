import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubmitButton } from './SubmitButton';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';

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
