import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { MaxPrice } from './MaxPrice';

export default {
	title: 'Main Library/atoms/MaxPrice',
	component: MaxPrice,
	decorators: [
		(Story) => (
			<SearchFormContextProvider>
				<Story />
			</SearchFormContextProvider>
		),
	],
} as ComponentMeta<typeof MaxPrice>;

type MaxPriceStory = ComponentStory<typeof MaxPrice>;

export const Default: MaxPriceStory = (props) => {
	return <MaxPrice {...props} />;
};

Default.args = {};
