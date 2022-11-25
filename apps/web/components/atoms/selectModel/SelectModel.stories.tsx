import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Providers } from 'app/Providers';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { SelectModel } from './SelectModel';

export default {
	title: 'Main Library/atoms/SelectModel',
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

export const Default: SelectModelStory = (props) => {
	return <SelectModel {...props} />;
};

Default.args = {};
