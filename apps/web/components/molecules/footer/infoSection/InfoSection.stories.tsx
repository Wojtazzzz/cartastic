import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { InfoSection } from './InfoSection';

export default {
	title: 'Footer/molecules/InfoSection',
	component: InfoSection,
} as ComponentMeta<typeof InfoSection>;

type InfoSectionStory = ComponentStory<typeof InfoSection>;

export const Default: InfoSectionStory = (props) => {
	return <InfoSection {...props} />;
};

Default.args = {};
