import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { MinPrice } from './MinPrice';

export default {
	title: 'Main Library/atoms/MinPrice',
	component: MinPrice,
	decorators: [
		(Story) => (
			<SearchFormContextProvider>
				<Story />
			</SearchFormContextProvider>
		),
	],
} as ComponentMeta<typeof MinPrice>;

type MinPriceStory = ComponentStory<typeof MinPrice>;

export const Default: MinPriceStory = (props) => {
	return <MinPrice {...props} />;
};

Default.args = {};
