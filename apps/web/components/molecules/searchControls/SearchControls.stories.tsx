import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchControls } from './SearchControls';

export default {
	title: 'Main Library/molecules/SearchControls',
	component: SearchControls,
} as ComponentMeta<typeof SearchControls>;

type SearchControlsStory = ComponentStory<typeof SearchControls>;

export const Default: SearchControlsStory = (props) => {
	return <SearchControls {...props} />;
};

Default.args = {};

Default.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
