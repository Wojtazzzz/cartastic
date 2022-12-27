import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectModel } from './SelectModel';
import { Providers } from 'app/Providers';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';

export default {
	title: 'Search/atoms/SelectModel',
	component: SelectModel,
	decorators: [
		(Story) => (
			<Providers>
				<SearchFormContextProvider>
					<Story />
				</SearchFormContextProvider>
			</Providers>
		),
	],
} as ComponentMeta<typeof SelectModel>;

type SelectModelStory = ComponentStory<typeof SelectModel>;

export const Default: SelectModelStory = () => {
	return <SelectModel />;
};
