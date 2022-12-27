import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MinPrice } from './MinPrice';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';

export default {
	title: 'Search/atoms/MinPrice',
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

export const Default: MinPriceStory = () => {
	return <MinPrice />;
};
