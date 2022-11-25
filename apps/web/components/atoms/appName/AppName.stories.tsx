import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppName } from './AppName';

export default {
	title: 'Main Library/molecules/AppName',
	component: AppName,
} as ComponentMeta<typeof AppName>;

type AppNameStory = ComponentStory<typeof AppName>;

export const Dark: AppNameStory = (props) => {
	return <AppName {...props} />;
};

Dark.args = {
	variant: 'dark',
};

export const Light: AppNameStory = (props) => {
	return <AppName {...props} />;
};

Light.args = {
	variant: 'light',
};

Light.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
