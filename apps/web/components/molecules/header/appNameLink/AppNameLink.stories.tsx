import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppNameLink } from './AppNameLink';

export default {
	title: 'Header/molecules/AppNameLink',
	component: AppNameLink,
} as ComponentMeta<typeof AppNameLink>;

type AppNameLinkStory = ComponentStory<typeof AppNameLink>;

export const Default: AppNameLinkStory = () => {
	return <AppNameLink />;
};
