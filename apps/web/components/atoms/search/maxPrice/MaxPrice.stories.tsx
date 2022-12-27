import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MaxPrice } from './MaxPrice';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';

export default {
	title: 'Search/atoms/MaxPrice',
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

export const Default: MaxPriceStory = () => {
	return <MaxPrice />;
};
