import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppName } from './AppName';

export default {
	title: 'Main Library/molecules/AppName',
	component: AppName,
} as ComponentMeta<typeof AppName>;

type AppNameStory = ComponentStory<typeof AppName>;

export const Default: AppNameStory = () => {
	return <AppName />;
};
