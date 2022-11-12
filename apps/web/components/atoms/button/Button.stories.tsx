import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
	title: 'Main Library/atoms/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

type ButtonStory = ComponentStory<typeof Button>;

export const Classic: ButtonStory = (props) => {
	return <Button {...props} />;
};

Classic.args = {
	title: 'Classic Button',
	variant: 'classic',
};

export const Outline: ButtonStory = (props) => {
	return <Button {...props} />;
};

Outline.args = {
	title: 'Outline Button',
	variant: 'outline',
};

Outline.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
