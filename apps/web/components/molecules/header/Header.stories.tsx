import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './Header';

export default {
	title: 'Main Library/organisms/Header',
	component: Header,
} as ComponentMeta<typeof Header>;

type HeaderStory = ComponentStory<typeof Header>;

export const Default: HeaderStory = () => {
	return <Header />;
};
