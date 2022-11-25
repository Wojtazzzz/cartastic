import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './Heading';

export default {
	title: 'Main Library/atoms/Heading',
	component: Heading,
} as ComponentMeta<typeof Heading>;

type HeadingStory = ComponentStory<typeof Heading>;

export const Default: HeadingStory = (props) => {
	return <Heading {...props} />;
};

Default.args = {
	tag: 'h1',
	children: 'Example visible heading',
};

export const Invisible: HeadingStory = (props) => {
	return <Heading {...props} />;
};

Invisible.args = {
	tag: 'h1',
	children: 'Invisible heading',
	invisible: true,
};
