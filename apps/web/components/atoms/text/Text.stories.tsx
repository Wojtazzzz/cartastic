import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';

export default {
	title: 'Main Library/atoms/Text',
	component: Text,
} as ComponentMeta<typeof Text>;

type TextStory = ComponentStory<typeof Text>;

export const Default: TextStory = (props) => {
	return <Text {...props} />;
};

Default.args = {
	children: 'Text without tag prop is rendered as span',
};
