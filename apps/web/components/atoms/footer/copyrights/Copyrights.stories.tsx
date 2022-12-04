import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Copyrights } from './Copyrights';

export default {
	title: 'Footer/atoms/Copyrights',
	component: Copyrights,
} as ComponentMeta<typeof Copyrights>;

type CopyrightsStory = ComponentStory<typeof Copyrights>;

export const Default: CopyrightsStory = (props) => {
	return <Copyrights {...props} />;
};

Default.args = {};
