import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nav } from './Nav';

export default {
	title: 'Header/molecules/Nav',
	component: Nav,
} as ComponentMeta<typeof Nav>;

type NavStory = ComponentStory<typeof Nav>;

export const Default: NavStory = () => {
	return <Nav />;
};
